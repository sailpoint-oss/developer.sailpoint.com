# LifecycleComment

# LifecycleComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentId** | Pointer to **string** | Server-assigned comment identifier. | [optional] 
**Author** | Pointer to [**LifecycleCommentAuthorReference**](lifecycle-comment-author-reference) |  | [optional] 
**Comment** | Pointer to **string** | Free-text comment body. | [optional] 
**CreatedAt** | Pointer to **SailPointTime** | Time when the comment was created (ISO-8601). | [optional] 

## Methods

### NewLifecycleComment

`func NewLifecycleComment() *LifecycleComment`

NewLifecycleComment instantiates a new LifecycleComment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLifecycleCommentWithDefaults

`func NewLifecycleCommentWithDefaults() *LifecycleComment`

NewLifecycleCommentWithDefaults instantiates a new LifecycleComment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommentId

`func (o *LifecycleComment) GetCommentId() string`

GetCommentId returns the CommentId field if non-nil, zero value otherwise.

### GetCommentIdOk

`func (o *LifecycleComment) GetCommentIdOk() (*string, bool)`

GetCommentIdOk returns a tuple with the CommentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentId

`func (o *LifecycleComment) SetCommentId(v string)`

SetCommentId sets CommentId field to given value.

### HasCommentId

`func (o *LifecycleComment) HasCommentId() bool`

HasCommentId returns a boolean if a field has been set.

### GetAuthor

`func (o *LifecycleComment) GetAuthor() LifecycleCommentAuthorReference`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *LifecycleComment) GetAuthorOk() (*LifecycleCommentAuthorReference, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *LifecycleComment) SetAuthor(v LifecycleCommentAuthorReference)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *LifecycleComment) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.

### GetComment

`func (o *LifecycleComment) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *LifecycleComment) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *LifecycleComment) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *LifecycleComment) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCreatedAt

`func (o *LifecycleComment) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *LifecycleComment) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *LifecycleComment) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *LifecycleComment) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.


