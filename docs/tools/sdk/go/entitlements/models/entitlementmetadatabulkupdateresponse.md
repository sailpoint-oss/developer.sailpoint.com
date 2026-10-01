# Entitlementmetadatabulkupdateresponse

# Entitlementmetadatabulkupdateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the task that is processing the bulk update. | [optional] 
**Type** | Pointer to **string** | Type of the object the bulk update applies to. | [optional] 
**Status** | Pointer to **string** | The status of the bulk update request. | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the bulk update request was created | [optional] 

## Methods

### NewEntitlementmetadatabulkupdateresponse

`func NewEntitlementmetadatabulkupdateresponse() *Entitlementmetadatabulkupdateresponse`

NewEntitlementmetadatabulkupdateresponse instantiates a new Entitlementmetadatabulkupdateresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementmetadatabulkupdateresponseWithDefaults

`func NewEntitlementmetadatabulkupdateresponseWithDefaults() *Entitlementmetadatabulkupdateresponse`

NewEntitlementmetadatabulkupdateresponseWithDefaults instantiates a new Entitlementmetadatabulkupdateresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Entitlementmetadatabulkupdateresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Entitlementmetadatabulkupdateresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Entitlementmetadatabulkupdateresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Entitlementmetadatabulkupdateresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Entitlementmetadatabulkupdateresponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Entitlementmetadatabulkupdateresponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Entitlementmetadatabulkupdateresponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Entitlementmetadatabulkupdateresponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStatus

`func (o *Entitlementmetadatabulkupdateresponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Entitlementmetadatabulkupdateresponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Entitlementmetadatabulkupdateresponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Entitlementmetadatabulkupdateresponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreated

`func (o *Entitlementmetadatabulkupdateresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Entitlementmetadatabulkupdateresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Entitlementmetadatabulkupdateresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Entitlementmetadatabulkupdateresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


