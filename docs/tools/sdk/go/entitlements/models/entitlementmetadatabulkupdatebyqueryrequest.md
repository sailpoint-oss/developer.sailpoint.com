# Entitlementmetadatabulkupdatebyqueryrequest

# Entitlementmetadatabulkupdatebyqueryrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **map[string]interface\{\}** | The search query selecting the entitlements to update. | 
**Operation** | **string** | The operation to be performed | 
**ReplaceScope** | Pointer to **string** | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the entitlement. | [optional] 
**Values** | [**[]EntitlementmetadatabulkupdatebyidrequestValuesInner**](entitlementmetadatabulkupdatebyidrequest-values-inner) | The metadata to be updated, including attribute key and value. | 

## Methods

### NewEntitlementmetadatabulkupdatebyqueryrequest

`func NewEntitlementmetadatabulkupdatebyqueryrequest(query map[string]interface{}, operation string, values []EntitlementmetadatabulkupdatebyidrequestValuesInner, ) *Entitlementmetadatabulkupdatebyqueryrequest`

NewEntitlementmetadatabulkupdatebyqueryrequest instantiates a new Entitlementmetadatabulkupdatebyqueryrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementmetadatabulkupdatebyqueryrequestWithDefaults

`func NewEntitlementmetadatabulkupdatebyqueryrequestWithDefaults() *Entitlementmetadatabulkupdatebyqueryrequest`

NewEntitlementmetadatabulkupdatebyqueryrequestWithDefaults instantiates a new Entitlementmetadatabulkupdatebyqueryrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *Entitlementmetadatabulkupdatebyqueryrequest) GetQuery() map[string]interface{}`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *Entitlementmetadatabulkupdatebyqueryrequest) GetQueryOk() (*map[string]interface{}, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *Entitlementmetadatabulkupdatebyqueryrequest) SetQuery(v map[string]interface{})`

SetQuery sets Query field to given value.


### GetOperation

`func (o *Entitlementmetadatabulkupdatebyqueryrequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Entitlementmetadatabulkupdatebyqueryrequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Entitlementmetadatabulkupdatebyqueryrequest) SetOperation(v string)`

SetOperation sets Operation field to given value.


### GetReplaceScope

`func (o *Entitlementmetadatabulkupdatebyqueryrequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *Entitlementmetadatabulkupdatebyqueryrequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *Entitlementmetadatabulkupdatebyqueryrequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.

### HasReplaceScope

`func (o *Entitlementmetadatabulkupdatebyqueryrequest) HasReplaceScope() bool`

HasReplaceScope returns a boolean if a field has been set.

### GetValues

`func (o *Entitlementmetadatabulkupdatebyqueryrequest) GetValues() []EntitlementmetadatabulkupdatebyidrequestValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Entitlementmetadatabulkupdatebyqueryrequest) GetValuesOk() (*[]EntitlementmetadatabulkupdatebyidrequestValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Entitlementmetadatabulkupdatebyqueryrequest) SetValues(v []EntitlementmetadatabulkupdatebyidrequestValuesInner)`

SetValues sets Values field to given value.



