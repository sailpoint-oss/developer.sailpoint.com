# Rolelistfilterdtov2

# Rolelistfilterdtov2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | Pointer to **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **type**: *eq, in*  **owner.id**: *eq, in*  **additionalOwners.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, sw, co*  **accessProfile.id**: *eq, in*  **accessProfile.name**: *eq, sw, co*  **privilegeLevel.effective**: *eq, in*  Supported composite operators are *and, or* | [optional] [default to ""]
**AmmKeyValues** | Pointer to [**[]Rolelistfilterdtov2AmmKeyValuesInner**](rolelistfilterdtov2-amm-key-values-inner) |  | [optional] [default to []]

## Methods

### NewRolelistfilterdtov2

`func NewRolelistfilterdtov2() *Rolelistfilterdtov2`

NewRolelistfilterdtov2 instantiates a new Rolelistfilterdtov2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolelistfilterdtov2WithDefaults

`func NewRolelistfilterdtov2WithDefaults() *Rolelistfilterdtov2`

NewRolelistfilterdtov2WithDefaults instantiates a new Rolelistfilterdtov2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilters

`func (o *Rolelistfilterdtov2) GetFilters() string`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *Rolelistfilterdtov2) GetFiltersOk() (*string, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *Rolelistfilterdtov2) SetFilters(v string)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *Rolelistfilterdtov2) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetAmmKeyValues

`func (o *Rolelistfilterdtov2) GetAmmKeyValues() []Rolelistfilterdtov2AmmKeyValuesInner`

GetAmmKeyValues returns the AmmKeyValues field if non-nil, zero value otherwise.

### GetAmmKeyValuesOk

`func (o *Rolelistfilterdtov2) GetAmmKeyValuesOk() (*[]Rolelistfilterdtov2AmmKeyValuesInner, bool)`

GetAmmKeyValuesOk returns a tuple with the AmmKeyValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmmKeyValues

`func (o *Rolelistfilterdtov2) SetAmmKeyValues(v []Rolelistfilterdtov2AmmKeyValuesInner)`

SetAmmKeyValues sets AmmKeyValues field to given value.

### HasAmmKeyValues

`func (o *Rolelistfilterdtov2) HasAmmKeyValues() bool`

HasAmmKeyValues returns a boolean if a field has been set.


