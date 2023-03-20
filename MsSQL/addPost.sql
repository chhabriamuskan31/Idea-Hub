USE [blog_stack]
GO

/****** Object:  StoredProcedure [dbo].[sp_addPost]    Script Date: 14-12-2022 11:08:27 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
EXEC blog.sp_addPost 1,'post2',2,'shhhoorrtt','describe','slug',1,'tag4,tag5,tag6',2,2;

ALTER PROCEDURE [blog].[sp_addPost]
	@authorID int,
	@title varchar(300),
	@categoryID int,
	@shortDescription varchar(1000),
	@description nvarchar(max),
	@slug varchar(100),
	@fileName varchar(1000),
	@scheduleYN bit,
	@tags nvarchar(max),
	-- @publishedAt varchar(500),
	@numberLikes int=0,
	@numberComments int=0
AS
BEGIN
	
	INSERT INTO [blog].[posts]
				([AuthorID],
				[Title],
				[CategoryID],
				[ShortDescription],
				[Description],
				[Slug],
				[FileName],
				[ScheduledYN],
				[NumberLikes],
				[NumberComments])
		VALUES(@authorID,
				@title,
				@categoryID,
				@shortDescription,
				@description,
				@slug,
				@fileName,
				@scheduleYN,
				@numberLikes,
				@numberComments)

		DECLARE @postID int

		SELECT @postID = SCOPE_IDENTITY()
		-- print(@postID)  For debugging
		INSERT INTO blog.tags(TagName)
		SELECT value FROM STRING_SPLIT(@tags,',')

		WHERE NOT EXISTS(
		select * from blog.tags where TagName = value)

		-- select * from blog.tags  For debugging

		INSERT INTO blog.post_tag(postID, TagID)
		SELECT @postID,tagID
		FROM blog.tags
		where tagName in
		(SELECT value FROM string_split(@tags,','))
END
GO

--For debugging
 --=============================================
 --select * from blog.posts
 --select * from blog.tags
 --select * from blog.post_tag
 --=============================================


