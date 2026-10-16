# AccessProfileListFilterDTO

# AccessProfileListFilterDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | Pointer to **NullableString** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or* | [optional] 
**AmmKeyValues** | Pointer to [**[]AccessProfileListFilterDTOAmmKeyValuesInner**](access-profile-list-filter-dto-amm-key-values-inner) | The Access Model Metadata attributes and values used to filter the results. | [optional] 

## Methods

### NewAccessProfileListFilterDTO

`func NewAccessProfileListFilterDTO() *AccessProfileListFilterDTO`

NewAccessProfileListFilterDTO instantiates a new AccessProfileListFilterDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileListFilterDTOWithDefaults

`func NewAccessProfileListFilterDTOWithDefaults() *AccessProfileListFilterDTO`

NewAccessProfileListFilterDTOWithDefaults instantiates a new AccessProfileListFilterDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilters

`func (o *AccessProfileListFilterDTO) GetFilters() string`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *AccessProfileListFilterDTO) GetFiltersOk() (*string, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *AccessProfileListFilterDTO) SetFilters(v string)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *AccessProfileListFilterDTO) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### SetFiltersNil

`func (o *AccessProfileListFilterDTO) SetFiltersNil(b bool)`

 SetFiltersNil sets the value for Filters to be an explicit nil

### UnsetFilters
`func (o *AccessProfileListFilterDTO) UnsetFilters()`

UnsetFilters ensures that no value is present for Filters, not even an explicit nil
### GetAmmKeyValues

`func (o *AccessProfileListFilterDTO) GetAmmKeyValues() []AccessProfileListFilterDTOAmmKeyValuesInner`

GetAmmKeyValues returns the AmmKeyValues field if non-nil, zero value otherwise.

### GetAmmKeyValuesOk

`func (o *AccessProfileListFilterDTO) GetAmmKeyValuesOk() (*[]AccessProfileListFilterDTOAmmKeyValuesInner, bool)`

GetAmmKeyValuesOk returns a tuple with the AmmKeyValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmmKeyValues

`func (o *AccessProfileListFilterDTO) SetAmmKeyValues(v []AccessProfileListFilterDTOAmmKeyValuesInner)`

SetAmmKeyValues sets AmmKeyValues field to given value.

### HasAmmKeyValues

`func (o *AccessProfileListFilterDTO) HasAmmKeyValues() bool`

HasAmmKeyValues returns a boolean if a field has been set.

### SetAmmKeyValuesNil

`func (o *AccessProfileListFilterDTO) SetAmmKeyValuesNil(b bool)`

 SetAmmKeyValuesNil sets the value for AmmKeyValues to be an explicit nil

### UnsetAmmKeyValues
`func (o *AccessProfileListFilterDTO) UnsetAmmKeyValues()`

UnsetAmmKeyValues ensures that no value is present for AmmKeyValues, not even an explicit nil

