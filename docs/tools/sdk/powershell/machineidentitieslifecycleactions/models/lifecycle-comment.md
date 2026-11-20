# LifecycleComment

# LifecycleComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentId** | **String** | Server-assigned comment identifier. | [optional] 
**Author** | [**LifecycleCommentAuthorReference**](lifecycle-comment-author-reference) |  | [optional] 
**Comment** | **String** | Free-text comment body. | [optional] 
**CreatedAt** | **System.DateTime** | Time when the comment was created (ISO-8601). | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecycleComment = Initialize-LifecycleComment  -CommentId 9f3c2b7e-5a1d-4c8e-b6f0-2d4a7e9c1b53 `
 -Author null `
 -Comment Suspending agent until security review completes `
 -CreatedAt 2026-05-26T19:00Z
```

- Convert the resource to JSON
```powershell
$LifecycleComment | ConvertTo-JSON
```


[[Back to top]](#) 

