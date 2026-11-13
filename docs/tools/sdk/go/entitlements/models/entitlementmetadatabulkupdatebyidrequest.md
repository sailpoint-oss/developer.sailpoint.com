# Entitlementmetadatabulkupdatebyidrequest

# Entitlementmetadatabulkupdatebyidrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entitlements** | **[]string** | The IDs of the entitlements to update. | 
**Operation** | **string** | The operation to be performed | 
**ReplaceScope** | Pointer to **string** | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the entitlement. | [optional] 
**Values** | [**[]EntitlementmetadatabulkupdatebyidrequestValuesInner**](entitlementmetadatabulkupdatebyidrequest-values-inner) | The metadata to be updated, including attribute key and value. | 

## Methods

### NewEntitlementmetadatabulkupdatebyidrequest

`func NewEntitlementmetadatabulkupdatebyidrequest(entitlements []string, operation string, values []EntitlementmetadatabulkupdatebyidrequestValuesInner, ) *Entitlementmetadatabulkupdatebyidrequest`

NewEntitlementmetadatabulkupdatebyidrequest instantiates a new Entitlementmetadatabulkupdatebyidrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementmetadatabulkupdatebyidrequestWithDefaults

`func NewEntitlementmetadatabulkupdatebyidrequestWithDefaults() *Entitlementmetadatabulkupdatebyidrequest`

NewEntitlementmetadatabulkupdatebyidrequestWithDefaults instantiates a new Entitlementmetadatabulkupdatebyidrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlements

`func (o *Entitlementmetadatabulkupdatebyidrequest) GetEntitlements() []string`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *Entitlementmetadatabulkupdatebyidrequest) GetEntitlementsOk() (*[]string, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *Entitlementmetadatabulkupdatebyidrequest) SetEntitlements(v []string)`

SetEntitlements sets Entitlements field to given value.


### GetOperation

`func (o *Entitlementmetadatabulkupdatebyidrequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Entitlementmetadatabulkupdatebyidrequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Entitlementmetadatabulkupdatebyidrequest) SetOperation(v string)`

SetOperation sets Operation field to given value.


### GetReplaceScope

`func (o *Entitlementmetadatabulkupdatebyidrequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *Entitlementmetadatabulkupdatebyidrequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *Entitlementmetadatabulkupdatebyidrequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.

### HasReplaceScope

`func (o *Entitlementmetadatabulkupdatebyidrequest) HasReplaceScope() bool`

HasReplaceScope returns a boolean if a field has been set.

### GetValues

`func (o *Entitlementmetadatabulkupdatebyidrequest) GetValues() []EntitlementmetadatabulkupdatebyidrequestValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Entitlementmetadatabulkupdatebyidrequest) GetValuesOk() (*[]EntitlementmetadatabulkupdatebyidrequestValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Entitlementmetadatabulkupdatebyidrequest) SetValues(v []EntitlementmetadatabulkupdatebyidrequestValuesInner)`

SetValues sets Values field to given value.



