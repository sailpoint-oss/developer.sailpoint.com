# Responseactioncreaterequest

# Responseactioncreaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionType** | **string** | Which response action to run. | 
**IdentityType** | **string** | Subject type of the response action. v1 supports HUMAN. | 
**IdentityId** | **string** | ISC identity id, resolved by the caller from a prior intelligence query. | 
**AccountIds** | Pointer to **[]string** | One or more account ids. Required for DISABLE_ACCOUNT (1-50 after trim/dedupe); must be omitted for DISABLE_IDENTITY. A single account is sent as a one-element array.  | [optional] 
**Context** | [**Responseactioncontext**](responseactioncontext) |  | 

## Methods

### NewResponseactioncreaterequest

`func NewResponseactioncreaterequest(actionType string, identityType string, identityId string, context Responseactioncontext, ) *Responseactioncreaterequest`

NewResponseactioncreaterequest instantiates a new Responseactioncreaterequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseactioncreaterequestWithDefaults

`func NewResponseactioncreaterequestWithDefaults() *Responseactioncreaterequest`

NewResponseactioncreaterequestWithDefaults instantiates a new Responseactioncreaterequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActionType

`func (o *Responseactioncreaterequest) GetActionType() string`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *Responseactioncreaterequest) GetActionTypeOk() (*string, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *Responseactioncreaterequest) SetActionType(v string)`

SetActionType sets ActionType field to given value.


### GetIdentityType

`func (o *Responseactioncreaterequest) GetIdentityType() string`

GetIdentityType returns the IdentityType field if non-nil, zero value otherwise.

### GetIdentityTypeOk

`func (o *Responseactioncreaterequest) GetIdentityTypeOk() (*string, bool)`

GetIdentityTypeOk returns a tuple with the IdentityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityType

`func (o *Responseactioncreaterequest) SetIdentityType(v string)`

SetIdentityType sets IdentityType field to given value.


### GetIdentityId

`func (o *Responseactioncreaterequest) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Responseactioncreaterequest) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Responseactioncreaterequest) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.


### GetAccountIds

`func (o *Responseactioncreaterequest) GetAccountIds() []string`

GetAccountIds returns the AccountIds field if non-nil, zero value otherwise.

### GetAccountIdsOk

`func (o *Responseactioncreaterequest) GetAccountIdsOk() (*[]string, bool)`

GetAccountIdsOk returns a tuple with the AccountIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountIds

`func (o *Responseactioncreaterequest) SetAccountIds(v []string)`

SetAccountIds sets AccountIds field to given value.

### HasAccountIds

`func (o *Responseactioncreaterequest) HasAccountIds() bool`

HasAccountIds returns a boolean if a field has been set.

### GetContext

`func (o *Responseactioncreaterequest) GetContext() Responseactioncontext`

GetContext returns the Context field if non-nil, zero value otherwise.

### GetContextOk

`func (o *Responseactioncreaterequest) GetContextOk() (*Responseactioncontext, bool)`

GetContextOk returns a tuple with the Context field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContext

`func (o *Responseactioncreaterequest) SetContext(v Responseactioncontext)`

SetContext sets Context field to given value.



