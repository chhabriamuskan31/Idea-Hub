USE [blog_stack]
GO
/****** Object:  StoredProcedure [blog].[sp_viewProfile]    Script Date: 04-02-2023 18:58:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_viewProfile]
	 @userID int
AS 
BEGIN

	SELECT * FROM [dbo].[users]
		WHERE UserID = @userID
		AND [ActiveYn] =1

		
END
GO
