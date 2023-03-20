
CREATE PROCEDURE [blog].[sp_likeComment]
	@userID int,
	@commentID int

As	
BEGIN
		
		INSERT INTO [blog].[comment_likes]
					([UserID],
					[CommentID])
			Values
					(@userID,
					@commentID)
		UPDATE blog.comments
		set NumberLikes = NumberLikes + 1
		where CommentID = @commentID
	
END
GO




	

