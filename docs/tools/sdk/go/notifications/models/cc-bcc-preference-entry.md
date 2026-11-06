# CcBccPreferenceEntry

# CcBccPreferenceEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **CcBccRecipientType** |  | 
**Id** | Pointer to **NullableString** | Identity or governance group id when required by the recipient type. For MANAGER_OF, when provided this is the identity whose manager should receive the email. | [optional] 
**Email** | Pointer to **NullableString** | Static email address when type is STATIC_EMAIL. | [optional] 

## Methods

### NewCcBccPreferenceEntry

`func NewCcBccPreferenceEntry(type_ CcBccRecipientType, ) *CcBccPreferenceEntry`

NewCcBccPreferenceEntry instantiates a new CcBccPreferenceEntry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCcBccPreferenceEntryWithDefaults

`func NewCcBccPreferenceEntryWithDefaults() *CcBccPreferenceEntry`

NewCcBccPreferenceEntryWithDefaults instantiates a new CcBccPreferenceEntry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *CcBccPreferenceEntry) GetType() CcBccRecipientType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CcBccPreferenceEntry) GetTypeOk() (*CcBccRecipientType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CcBccPreferenceEntry) SetType(v CcBccRecipientType)`

SetType sets Type field to given value.


### GetId

`func (o *CcBccPreferenceEntry) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CcBccPreferenceEntry) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CcBccPreferenceEntry) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CcBccPreferenceEntry) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *CcBccPreferenceEntry) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *CcBccPreferenceEntry) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetEmail

`func (o *CcBccPreferenceEntry) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *CcBccPreferenceEntry) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *CcBccPreferenceEntry) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *CcBccPreferenceEntry) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### SetEmailNil

`func (o *CcBccPreferenceEntry) SetEmailNil(b bool)`

 SetEmailNil sets the value for Email to be an explicit nil

### UnsetEmail
`func (o *CcBccPreferenceEntry) UnsetEmail()`

UnsetEmail ensures that no value is present for Email, not even an explicit nil

