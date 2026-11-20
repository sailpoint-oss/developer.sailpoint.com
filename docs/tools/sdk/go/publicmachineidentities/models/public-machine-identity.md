# PublicMachineIdentity

# PublicMachineIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Machine identity id. | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the machine identity. | [optional] 
**Description** | Pointer to **NullableString** | Description of the machine identity. | [optional] 
**Subtype** | Pointer to **NullableString** | Machine identity subtype. Present when your tenant returns enriched public machine identity data; otherwise omitted or null. | [optional] 
**Owner** | Pointer to [**PublicMachineIdentityOwner**](public-machine-identity-owner) |  | [optional] 

## Methods

### NewPublicMachineIdentity

`func NewPublicMachineIdentity() *PublicMachineIdentity`

NewPublicMachineIdentity instantiates a new PublicMachineIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicMachineIdentityWithDefaults

`func NewPublicMachineIdentityWithDefaults() *PublicMachineIdentity`

NewPublicMachineIdentityWithDefaults instantiates a new PublicMachineIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PublicMachineIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PublicMachineIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PublicMachineIdentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *PublicMachineIdentity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *PublicMachineIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PublicMachineIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PublicMachineIdentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PublicMachineIdentity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *PublicMachineIdentity) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PublicMachineIdentity) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PublicMachineIdentity) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PublicMachineIdentity) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *PublicMachineIdentity) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *PublicMachineIdentity) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSubtype

`func (o *PublicMachineIdentity) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *PublicMachineIdentity) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *PublicMachineIdentity) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.

### HasSubtype

`func (o *PublicMachineIdentity) HasSubtype() bool`

HasSubtype returns a boolean if a field has been set.

### SetSubtypeNil

`func (o *PublicMachineIdentity) SetSubtypeNil(b bool)`

 SetSubtypeNil sets the value for Subtype to be an explicit nil

### UnsetSubtype
`func (o *PublicMachineIdentity) UnsetSubtype()`

UnsetSubtype ensures that no value is present for Subtype, not even an explicit nil
### GetOwner

`func (o *PublicMachineIdentity) GetOwner() PublicMachineIdentityOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *PublicMachineIdentity) GetOwnerOk() (*PublicMachineIdentityOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *PublicMachineIdentity) SetOwner(v PublicMachineIdentityOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *PublicMachineIdentity) HasOwner() bool`

HasOwner returns a boolean if a field has been set.


