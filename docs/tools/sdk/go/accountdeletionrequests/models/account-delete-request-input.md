# AccountDeleteRequestInput

# AccountDeleteRequestInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comments** | Pointer to **string** | Reason for deleting the account. | [optional] 

## Methods

### NewAccountDeleteRequestInput

`func NewAccountDeleteRequestInput() *AccountDeleteRequestInput`

NewAccountDeleteRequestInput instantiates a new AccountDeleteRequestInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountDeleteRequestInputWithDefaults

`func NewAccountDeleteRequestInputWithDefaults() *AccountDeleteRequestInput`

NewAccountDeleteRequestInputWithDefaults instantiates a new AccountDeleteRequestInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComments

`func (o *AccountDeleteRequestInput) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *AccountDeleteRequestInput) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *AccountDeleteRequestInput) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *AccountDeleteRequestInput) HasComments() bool`

HasComments returns a boolean if a field has been set.


