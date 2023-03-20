-- where name like %tag%

CREATE PROCEDURE [blog].[sp_matchTags] @searchString varchar (500)

AS
BEGIN

		
	SELECT TagID, TagName
	FROM blog.tags
	where tags.TagName = @searchString
	or TagName LIKE CONCAT('%', @searchString,'%')
	AND ActiveYN=1;

END
GO

select * from blog.tags;



