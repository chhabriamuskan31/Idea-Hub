CREATE PROCEDURE [blog].[sp_addCommentToPost]
	@comment varchar(1000),
	@numberLikes int,
	@userID int,
	@postID int

As	
BEGIN
	
	INSERT INTO [blog].[comments]
				([Comment],
				[NumberLikes],
				[UserID],
				[PostID])
		VALUES(@comment,
				@numberLikes,
				@userID,
				@postID)
				
				
		UPDATE	[blog].[posts]
			set [NumberComments] = [NumberComments] + 1
			WHERE [PostID] = @postID

END
GO

select * from blog.posts
select * from blog.comments