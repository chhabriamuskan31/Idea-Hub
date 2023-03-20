USE [blog_stack]
GO

/****** Object:  StoredProcedure [blog].[sp_fetchPosts]    Script Date: 23-12-2022 11:25:18 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


--------------------------------------------
--------------------------------------------
ALTER PROCEDURE [blog].[sp_fetchPosts]
--select * from blog.posts
	

AS
BEGIN

	DROP TABLE IF EXISTS #temptable

	SELECT p.PostID, STRING_AGG(t.Tagname,',') as tags
	INTO #temptable
	FROM blog.posts p
	INNER JOIN blog.post_tag pt
	ON p.PostID = pt.PostID
	INNER JOIN blog.tags t
	ON pt.TagID = t.TagID
	group by p.PostID

	--select * from #temptable

	SELECT p.[PostID],
	users.[UserID],
	users.[UserName] as author,
	p.[Title],
	c.[CategoryId],
	c.[name],
	p.[ShortDescription],
	p.[Description],
	p.[slug],
	p.[Numberlikes],
	p.[Numbercomments],
	p.[PublishedAT],
	t.tags
	FROM blog.posts p
	INNER JOIN #temptable t
	ON p.PostID = t.PostID 
	inner join dbo.users users
	ON users.UserID = p.AuthorID
	inner join blog.categories c 
	ON c.CategoryID = p.CategoryID
	WHERE p.ActiveYN = 1
	AND p.PublishedAT <= GETDATE()

END
GO


