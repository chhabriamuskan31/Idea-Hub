CREATE PROCEDURE [blog].[sp_fetchProfile]
	
AS
BEGIN

		--Temp table will always started with #
		DROP TABLE IF EXISTS #temptable

		SELECT p.PostID, STRING_AGG(t.TagName,',') as tags
		INTO #temptable
		FROM blog.posts p
		INNER JOIN blog.post_tag pt
		ON p.PostID = pt.PostID
		INNER JOIN blog.tags t
		ON pt.TagID = t.TagID
		group by p.PostID

		--select * from #temptable
		--Aggregate function (groupby)
		select
		p.[postID],
		p.[title],
		p.[shortDescription],
		p.[description],
		p.[categoryID],
		p.[slug],
		p.[authorID],
		p.[numberLikes],
		p.[numberComments],
		p.[publishedAt],
		t.tags



		from blog.posts p 
		inner join #temptable t
		ON p.PostID = t.PostID
		WHERE p.activeYN = 1
		AND p.PublishedAt <= GETDATE()

		--Collase function or similar to group by.
	
END
GO

EXEC blog.[sp_fetchProfile]