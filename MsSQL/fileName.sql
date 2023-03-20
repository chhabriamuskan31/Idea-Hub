 
CREATE PROCEDURE [blog].[sp_fileName]
@postID int
AS
BEGIN
	SELECT FileName
	FROM blog.posts
	where PostID=@postID
END
