# PublicIdentityV2

# PublicIdentityV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **NullableString** | Identity id | 
**Name** | **NullableString** | Alternate unique identifier for the identity (alias / search field name). | 
**DisplayName** | **NullableString** | Human-readable display name of the identity. | 
**Email** | **NullableString** | Email address of identity. | 
**IdentityState** | **NullableString** | The current state of the identity, which determines how SailPoint Identity Security interacts with the identity. | 
**CloudLifecycleState** | **NullableString** | The lifecycle status for the identity | 
**Manager** | [**NullablePublicIdentityV2Manager**](public-identity-v2-manager) | Manager of this identity, or null when none | 
**Attributes** | **map[string]string** | Configured public identity attributes only (from visible-attributes configuredAttributes). Missing keys are omitted; present null values are returned as null. | 

## Methods

### NewPublicIdentityV2

`func NewPublicIdentityV2(id NullableString, name NullableString, displayName NullableString, email NullableString, identityState NullableString, cloudLifecycleState NullableString, manager NullablePublicIdentityV2Manager, attributes map[string]string, ) *PublicIdentityV2`

NewPublicIdentityV2 instantiates a new PublicIdentityV2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicIdentityV2WithDefaults

`func NewPublicIdentityV2WithDefaults() *PublicIdentityV2`

NewPublicIdentityV2WithDefaults instantiates a new PublicIdentityV2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PublicIdentityV2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PublicIdentityV2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PublicIdentityV2) SetId(v string)`

SetId sets Id field to given value.


### SetIdNil

`func (o *PublicIdentityV2) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *PublicIdentityV2) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *PublicIdentityV2) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PublicIdentityV2) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PublicIdentityV2) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *PublicIdentityV2) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *PublicIdentityV2) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDisplayName

`func (o *PublicIdentityV2) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *PublicIdentityV2) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *PublicIdentityV2) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### SetDisplayNameNil

`func (o *PublicIdentityV2) SetDisplayNameNil(b bool)`

 SetDisplayNameNil sets the value for DisplayName to be an explicit nil

### UnsetDisplayName
`func (o *PublicIdentityV2) UnsetDisplayName()`

UnsetDisplayName ensures that no value is present for DisplayName, not even an explicit nil
### GetEmail

`func (o *PublicIdentityV2) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *PublicIdentityV2) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *PublicIdentityV2) SetEmail(v string)`

SetEmail sets Email field to given value.


### SetEmailNil

`func (o *PublicIdentityV2) SetEmailNil(b bool)`

 SetEmailNil sets the value for Email to be an explicit nil

### UnsetEmail
`func (o *PublicIdentityV2) UnsetEmail()`

UnsetEmail ensures that no value is present for Email, not even an explicit nil
### GetIdentityState

`func (o *PublicIdentityV2) GetIdentityState() string`

GetIdentityState returns the IdentityState field if non-nil, zero value otherwise.

### GetIdentityStateOk

`func (o *PublicIdentityV2) GetIdentityStateOk() (*string, bool)`

GetIdentityStateOk returns a tuple with the IdentityState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityState

`func (o *PublicIdentityV2) SetIdentityState(v string)`

SetIdentityState sets IdentityState field to given value.


### SetIdentityStateNil

`func (o *PublicIdentityV2) SetIdentityStateNil(b bool)`

 SetIdentityStateNil sets the value for IdentityState to be an explicit nil

### UnsetIdentityState
`func (o *PublicIdentityV2) UnsetIdentityState()`

UnsetIdentityState ensures that no value is present for IdentityState, not even an explicit nil
### GetCloudLifecycleState

`func (o *PublicIdentityV2) GetCloudLifecycleState() string`

GetCloudLifecycleState returns the CloudLifecycleState field if non-nil, zero value otherwise.

### GetCloudLifecycleStateOk

`func (o *PublicIdentityV2) GetCloudLifecycleStateOk() (*string, bool)`

GetCloudLifecycleStateOk returns a tuple with the CloudLifecycleState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudLifecycleState

`func (o *PublicIdentityV2) SetCloudLifecycleState(v string)`

SetCloudLifecycleState sets CloudLifecycleState field to given value.


### SetCloudLifecycleStateNil

`func (o *PublicIdentityV2) SetCloudLifecycleStateNil(b bool)`

 SetCloudLifecycleStateNil sets the value for CloudLifecycleState to be an explicit nil

### UnsetCloudLifecycleState
`func (o *PublicIdentityV2) UnsetCloudLifecycleState()`

UnsetCloudLifecycleState ensures that no value is present for CloudLifecycleState, not even an explicit nil
### GetManager

`func (o *PublicIdentityV2) GetManager() PublicIdentityV2Manager`

GetManager returns the Manager field if non-nil, zero value otherwise.

### GetManagerOk

`func (o *PublicIdentityV2) GetManagerOk() (*PublicIdentityV2Manager, bool)`

GetManagerOk returns a tuple with the Manager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManager

`func (o *PublicIdentityV2) SetManager(v PublicIdentityV2Manager)`

SetManager sets Manager field to given value.


### SetManagerNil

`func (o *PublicIdentityV2) SetManagerNil(b bool)`

 SetManagerNil sets the value for Manager to be an explicit nil

### UnsetManager
`func (o *PublicIdentityV2) UnsetManager()`

UnsetManager ensures that no value is present for Manager, not even an explicit nil
### GetAttributes

`func (o *PublicIdentityV2) GetAttributes() map[string]string`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *PublicIdentityV2) GetAttributesOk() (*map[string]string, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *PublicIdentityV2) SetAttributes(v map[string]string)`

SetAttributes sets Attributes field to given value.



