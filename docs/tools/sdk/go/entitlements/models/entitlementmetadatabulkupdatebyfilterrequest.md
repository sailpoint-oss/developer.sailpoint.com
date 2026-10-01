# Entitlementmetadatabulkupdatebyfilterrequest

# Entitlementmetadatabulkupdatebyfilterrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* | 
**Operation** | **string** | The operation to be performed | 
**ReplaceScope** | Pointer to **string** | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the entitlement. | [optional] 
**Values** | [**[]EntitlementmetadatabulkupdatebyidrequestValuesInner**](entitlementmetadatabulkupdatebyidrequest-values-inner) | The metadata to be updated, including attribute key and value. | 

## Methods

### NewEntitlementmetadatabulkupdatebyfilterrequest

`func NewEntitlementmetadatabulkupdatebyfilterrequest(filters string, operation string, values []EntitlementmetadatabulkupdatebyidrequestValuesInner, ) *Entitlementmetadatabulkupdatebyfilterrequest`

NewEntitlementmetadatabulkupdatebyfilterrequest instantiates a new Entitlementmetadatabulkupdatebyfilterrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementmetadatabulkupdatebyfilterrequestWithDefaults

`func NewEntitlementmetadatabulkupdatebyfilterrequestWithDefaults() *Entitlementmetadatabulkupdatebyfilterrequest`

NewEntitlementmetadatabulkupdatebyfilterrequestWithDefaults instantiates a new Entitlementmetadatabulkupdatebyfilterrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilters

`func (o *Entitlementmetadatabulkupdatebyfilterrequest) GetFilters() string`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *Entitlementmetadatabulkupdatebyfilterrequest) GetFiltersOk() (*string, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *Entitlementmetadatabulkupdatebyfilterrequest) SetFilters(v string)`

SetFilters sets Filters field to given value.


### GetOperation

`func (o *Entitlementmetadatabulkupdatebyfilterrequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Entitlementmetadatabulkupdatebyfilterrequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Entitlementmetadatabulkupdatebyfilterrequest) SetOperation(v string)`

SetOperation sets Operation field to given value.


### GetReplaceScope

`func (o *Entitlementmetadatabulkupdatebyfilterrequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *Entitlementmetadatabulkupdatebyfilterrequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *Entitlementmetadatabulkupdatebyfilterrequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.

### HasReplaceScope

`func (o *Entitlementmetadatabulkupdatebyfilterrequest) HasReplaceScope() bool`

HasReplaceScope returns a boolean if a field has been set.

### GetValues

`func (o *Entitlementmetadatabulkupdatebyfilterrequest) GetValues() []EntitlementmetadatabulkupdatebyidrequestValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Entitlementmetadatabulkupdatebyfilterrequest) GetValuesOk() (*[]EntitlementmetadatabulkupdatebyidrequestValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Entitlementmetadatabulkupdatebyfilterrequest) SetValues(v []EntitlementmetadatabulkupdatebyidrequestValuesInner)`

SetValues sets Values field to given value.



