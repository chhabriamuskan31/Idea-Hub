CREATE PROCEDURE [blog].[sp_FetchCommentsOfPost]
	@postID int,
	@userID int,
	@username varchar(500),
	@numberLikes int
	
AS
BEGIN

		SELECT 
		c.comment,
		c.numberLikes,
		u.userName
		FROM blog.comments c
		INNER JOIN dbo.users u
		ON c.UserID = u.UserID AND u.ActiveYN = 1
		WHERE c.PostID = @postID
		order by c.NumberLikes desc

		
END
GO

--likeComment
--deleteComment (commentID delete no. of comments dec)
--deletePost (postid delete activeyn=0)