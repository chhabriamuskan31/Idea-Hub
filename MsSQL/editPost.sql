-- EXEC blog.sp_editPost 1,1,'title',1,'short desc','desc','sluggg',1,'tag1,tag2,newtag'


CREATE PROCEDURE [blog].[sp_editPost]
	@postID int,
	@authorID int,
	@title varchar(300),
	@categoryID int,
	@shortDescription varchar(1000),
	@description nvarchar(max),
	@slug varchar(100),
	@scheduleYN bit,
	@tags nvarchar(max),
	-- @publishedAt varchar(500),
	@numberLikes int = 0,
	@numberComments int =0
AS
BEGIN
	
		UPDATE	[blog].[posts]
			set [AuthorID] = @authorID, 
			[Title] = @title,
			[ShortDescription] = @shortDescription,
			[Description] = @description,
			[Slug] = @slug,
			[CategoryId] = @categoryID,
			[ScheduledYN] = @scheduleYN,
			[Numberlikes] = @numberLikes,
			[Numbercomments] = @numberComments
			WHERE [PostID] = @postID

		INSERT INTO blog.tags(TagName)
		SELECT value FROM STRING_SPLIT(@tags,',')
		WHERE NOT EXISTS(
		select * from blog.tags where TagName = value)

		DELETE FROM blog.post_tag
		WHERE postId = @postID
		-- select * from blog.tags  For debugging

		INSERT INTO blog.post_tag(postID, TagID)
		SELECT @postID,tagID
		FROM blog.tags
		where tagName in
		(SELECT value FROM string_split(@tags,','))
END
GO

