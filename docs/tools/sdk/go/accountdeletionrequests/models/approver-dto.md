# ApproverDto

# ApproverDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityID** | Pointer to **string** | Identity ID and it cannot be null. | [optional] 
**Id** | Pointer to **NullableString** | Optional id | [optional] 
**Name** | Pointer to **string** | Identity display name | [optional] 
**Email** | Pointer to **string** | Email address of identity | [optional] 
**Type** | Pointer to **string** | Used to mention type of data transfer object in this case it is used to transfer IDENTITY data. | [optional] 
**OwnerOf** | Pointer to [**[]ApproverReference**](approver-reference) | List of reference of identity type dto for account owner identities | [optional] 
**ActionedAs** | Pointer to [**[]ApproverReference**](approver-reference) | List of reference of identity type dto who acted on behalf of other identities. | [optional] 
**Members** | Pointer to [**[]ApproverReference**](approver-reference) | List of reference of identity type dto for member identities. | [optional] 

## Methods

### NewApproverDto

`func NewApproverDto() *ApproverDto`

NewApproverDto instantiates a new ApproverDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApproverDtoWithDefaults

`func NewApproverDtoWithDefaults() *ApproverDto`

NewApproverDtoWithDefaults instantiates a new ApproverDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityID

`func (o *ApproverDto) GetIdentityID() string`

GetIdentityID returns the IdentityID field if non-nil, zero value otherwise.

### GetIdentityIDOk

`func (o *ApproverDto) GetIdentityIDOk() (*string, bool)`

GetIdentityIDOk returns a tuple with the IdentityID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityID

`func (o *ApproverDto) SetIdentityID(v string)`

SetIdentityID sets IdentityID field to given value.

### HasIdentityID

`func (o *ApproverDto) HasIdentityID() bool`

HasIdentityID returns a boolean if a field has been set.

### GetId

`func (o *ApproverDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApproverDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApproverDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApproverDto) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *ApproverDto) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *ApproverDto) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *ApproverDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApproverDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApproverDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApproverDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmail

`func (o *ApproverDto) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ApproverDto) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ApproverDto) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *ApproverDto) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetType

`func (o *ApproverDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApproverDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApproverDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ApproverDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetOwnerOf

`func (o *ApproverDto) GetOwnerOf() []ApproverReference`

GetOwnerOf returns the OwnerOf field if non-nil, zero value otherwise.

### GetOwnerOfOk

`func (o *ApproverDto) GetOwnerOfOk() (*[]ApproverReference, bool)`

GetOwnerOfOk returns a tuple with the OwnerOf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerOf

`func (o *ApproverDto) SetOwnerOf(v []ApproverReference)`

SetOwnerOf sets OwnerOf field to given value.

### HasOwnerOf

`func (o *ApproverDto) HasOwnerOf() bool`

HasOwnerOf returns a boolean if a field has been set.

### SetOwnerOfNil

`func (o *ApproverDto) SetOwnerOfNil(b bool)`

 SetOwnerOfNil sets the value for OwnerOf to be an explicit nil

### UnsetOwnerOf
`func (o *ApproverDto) UnsetOwnerOf()`

UnsetOwnerOf ensures that no value is present for OwnerOf, not even an explicit nil
### GetActionedAs

`func (o *ApproverDto) GetActionedAs() []ApproverReference`

GetActionedAs returns the ActionedAs field if non-nil, zero value otherwise.

### GetActionedAsOk

`func (o *ApproverDto) GetActionedAsOk() (*[]ApproverReference, bool)`

GetActionedAsOk returns a tuple with the ActionedAs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionedAs

`func (o *ApproverDto) SetActionedAs(v []ApproverReference)`

SetActionedAs sets ActionedAs field to given value.

### HasActionedAs

`func (o *ApproverDto) HasActionedAs() bool`

HasActionedAs returns a boolean if a field has been set.

### SetActionedAsNil

`func (o *ApproverDto) SetActionedAsNil(b bool)`

 SetActionedAsNil sets the value for ActionedAs to be an explicit nil

### UnsetActionedAs
`func (o *ApproverDto) UnsetActionedAs()`

UnsetActionedAs ensures that no value is present for ActionedAs, not even an explicit nil
### GetMembers

`func (o *ApproverDto) GetMembers() []ApproverReference`

GetMembers returns the Members field if non-nil, zero value otherwise.

### GetMembersOk

`func (o *ApproverDto) GetMembersOk() (*[]ApproverReference, bool)`

GetMembersOk returns a tuple with the Members field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembers

`func (o *ApproverDto) SetMembers(v []ApproverReference)`

SetMembers sets Members field to given value.

### HasMembers

`func (o *ApproverDto) HasMembers() bool`

HasMembers returns a boolean if a field has been set.

### SetMembersNil

`func (o *ApproverDto) SetMembersNil(b bool)`

 SetMembersNil sets the value for Members to be an explicit nil

### UnsetMembers
`func (o *ApproverDto) UnsetMembers()`

UnsetMembers ensures that no value is present for Members, not even an explicit nil

