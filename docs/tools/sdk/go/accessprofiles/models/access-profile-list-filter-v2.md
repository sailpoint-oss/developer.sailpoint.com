# AccessProfileListFilterV2

# AccessProfileListFilterV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | Pointer to **NullableString** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co*  **created**: *lt, le, gt, ge*  **modified**: *lt, le, gt, ge*  **owner.id**: *eq, in*  **additionalOwners.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  **dimensional**: *eq*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, co*  **privilegeLevel.effective**: *eq, in*  Supported composite operators are *and, or* | [optional] 
**AmmKeyValues** | Pointer to [**[]AccessProfileListFilterDTOAmmKeyValuesInner**](access-profile-list-filter-dto-amm-key-values-inner) | The Access Model Metadata attributes and values used to filter the results. | [optional] 

## Methods

### NewAccessProfileListFilterV2

`func NewAccessProfileListFilterV2() *AccessProfileListFilterV2`

NewAccessProfileListFilterV2 instantiates a new AccessProfileListFilterV2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileListFilterV2WithDefaults

`func NewAccessProfileListFilterV2WithDefaults() *AccessProfileListFilterV2`

NewAccessProfileListFilterV2WithDefaults instantiates a new AccessProfileListFilterV2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilters

`func (o *AccessProfileListFilterV2) GetFilters() string`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *AccessProfileListFilterV2) GetFiltersOk() (*string, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *AccessProfileListFilterV2) SetFilters(v string)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *AccessProfileListFilterV2) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### SetFiltersNil

`func (o *AccessProfileListFilterV2) SetFiltersNil(b bool)`

 SetFiltersNil sets the value for Filters to be an explicit nil

### UnsetFilters
`func (o *AccessProfileListFilterV2) UnsetFilters()`

UnsetFilters ensures that no value is present for Filters, not even an explicit nil
### GetAmmKeyValues

`func (o *AccessProfileListFilterV2) GetAmmKeyValues() []AccessProfileListFilterDTOAmmKeyValuesInner`

GetAmmKeyValues returns the AmmKeyValues field if non-nil, zero value otherwise.

### GetAmmKeyValuesOk

`func (o *AccessProfileListFilterV2) GetAmmKeyValuesOk() (*[]AccessProfileListFilterDTOAmmKeyValuesInner, bool)`

GetAmmKeyValuesOk returns a tuple with the AmmKeyValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmmKeyValues

`func (o *AccessProfileListFilterV2) SetAmmKeyValues(v []AccessProfileListFilterDTOAmmKeyValuesInner)`

SetAmmKeyValues sets AmmKeyValues field to given value.

### HasAmmKeyValues

`func (o *AccessProfileListFilterV2) HasAmmKeyValues() bool`

HasAmmKeyValues returns a boolean if a field has been set.

### SetAmmKeyValuesNil

`func (o *AccessProfileListFilterV2) SetAmmKeyValuesNil(b bool)`

 SetAmmKeyValuesNil sets the value for AmmKeyValues to be an explicit nil

### UnsetAmmKeyValues
`func (o *AccessProfileListFilterV2) UnsetAmmKeyValues()`

UnsetAmmKeyValues ensures that no value is present for AmmKeyValues, not even an explicit nil

