# PublicMachineIdentityOwner

# PublicMachineIdentityOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Identity id of the primary owner. | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the primary owner. | [optional] 
**Email** | Pointer to **NullableString** | Email address of the primary owner. | [optional] 

## Methods

### NewPublicMachineIdentityOwner

`func NewPublicMachineIdentityOwner() *PublicMachineIdentityOwner`

NewPublicMachineIdentityOwner instantiates a new PublicMachineIdentityOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicMachineIdentityOwnerWithDefaults

`func NewPublicMachineIdentityOwnerWithDefaults() *PublicMachineIdentityOwner`

NewPublicMachineIdentityOwnerWithDefaults instantiates a new PublicMachineIdentityOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PublicMachineIdentityOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PublicMachineIdentityOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PublicMachineIdentityOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *PublicMachineIdentityOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *PublicMachineIdentityOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PublicMachineIdentityOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PublicMachineIdentityOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PublicMachineIdentityOwner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmail

`func (o *PublicMachineIdentityOwner) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *PublicMachineIdentityOwner) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *PublicMachineIdentityOwner) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *PublicMachineIdentityOwner) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### SetEmailNil

`func (o *PublicMachineIdentityOwner) SetEmailNil(b bool)`

 SetEmailNil sets the value for Email to be an explicit nil

### UnsetEmail
`func (o *PublicMachineIdentityOwner) UnsetEmail()`

UnsetEmail ensures that no value is present for Email, not even an explicit nil

