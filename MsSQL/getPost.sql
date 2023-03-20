USE [blog_stack]
GO

/****** Object:  StoredProcedure [blog].[sp_getPost]    Script Date: 05-02-2023 20:17:38 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [blog].[sp_getPost]
--DECLARE
@slug varchar(100) = 'vv'
AS
BEGIN
   DROP table IF EXISTS #temptable
   SELECT p.postID,STRING_AGG(t.tagName,',') as tags
   INTO #temptable
   FROM blog.posts p
   INNER JOIN blog.post_tag pt
   ON p.PostID=pt.PostID
   INNER JOIN blog.tags t
   ON pt.TagID=t.TagID
   GROUP BY p.PostID

   --SELECT * FROM #temptable
   SELECT 
   p.[postID],
   p.[title],
   p.[authorID],
   p.[categoryID],
   c.[name],
   p.[ShortDescription],
   p.[description],
   p.[slug],
   p.[publishedAt],
   p.[numberLikes],
   p.[numberComments],
   t.tags
   FROM blog.posts p
   INNER JOIN #temptable t
   ON p.PostID=t.PostID
   INNER JOIN dbo.users users
   ON users.UserID = p.AuthorID
   INNER JOIN blog.categories c
   ON c.CategoryID = p.CategoryID
   WHERE p.ActiveYN=1
   AND p.PublishedAt<GETDATE()
   AND p.slug=@slug
END

GO
SELECT * FROM  blog.posts

EXEC blog.sp_getPost 'sluggg'