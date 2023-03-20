CREATE PROCEDURE [blog].[sp_validateSlug]
	@slug varchar(50)
AS
BEGIN
	SELECT CASE WHEN
	(NOT EXISTS (SELECT slug from blog.posts where slug=@slug))
	THEN 1
	ELSE 0
	END as validSlug
		

END
GO


--Agar exist karta hai mtlb vo invalid hai bcs vo already used hai toh vo return 0 karega nhi present hoga toh return 1 karega.

select * from blog.posts;