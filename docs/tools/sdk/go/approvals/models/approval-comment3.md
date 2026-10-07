# ApprovalComment3

# ApprovalComment3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Author** | Pointer to [**ApprovalIdentity**](approval-identity) |  | [optional] 
**Comment** | Pointer to **string** | Comment to be left on an approval | [optional] 
**CreatedDate** | Pointer to **string** | Date the comment was created | [optional] 
**CommentId** | Pointer to **string** | ID of the comment | [optional] 

## Methods

### NewApprovalComment3

`func NewApprovalComment3() *ApprovalComment3`

NewApprovalComment3 instantiates a new ApprovalComment3 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalComment3WithDefaults

`func NewApprovalComment3WithDefaults() *ApprovalComment3`

NewApprovalComment3WithDefaults instantiates a new ApprovalComment3 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthor

`func (o *ApprovalComment3) GetAuthor() ApprovalIdentity`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *ApprovalComment3) GetAuthorOk() (*ApprovalIdentity, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *ApprovalComment3) SetAuthor(v ApprovalIdentity)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *ApprovalComment3) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.

### GetComment

`func (o *ApprovalComment3) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ApprovalComment3) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ApprovalComment3) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ApprovalComment3) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCreatedDate

`func (o *ApprovalComment3) GetCreatedDate() string`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *ApprovalComment3) GetCreatedDateOk() (*string, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *ApprovalComment3) SetCreatedDate(v string)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *ApprovalComment3) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetCommentId

`func (o *ApprovalComment3) GetCommentId() string`

GetCommentId returns the CommentId field if non-nil, zero value otherwise.

### GetCommentIdOk

`func (o *ApprovalComment3) GetCommentIdOk() (*string, bool)`

GetCommentIdOk returns a tuple with the CommentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentId

`func (o *ApprovalComment3) SetCommentId(v string)`

SetCommentId sets CommentId field to given value.

### HasCommentId

`func (o *ApprovalComment3) HasCommentId() bool`

HasCommentId returns a boolean if a field has been set.


