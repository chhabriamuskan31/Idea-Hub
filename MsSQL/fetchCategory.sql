USE [blog_stack]
GO

CREATE PROCEDURE [blog].[sp_fetchCategory]

AS
BEGIN


	SELECT categories.CategoryID,
	categories.name
	from blog.categories
	where ActiveYN=1;
END
GO


