# DataAccess2

# DataAccess2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policies** | Pointer to [**[]DataAccessPoliciesInner**](data-access-policies-inner) | List of classification policies that apply to resources the entitlement or group has access to. | [optional] 
**Categories** | Pointer to [**[]DataAccessCategoriesInner**](data-access-categories-inner) | List of classification categories that apply to resources the entitlement or group has access to. | [optional] 
**ImpactScore** | Pointer to [**DataAccessImpactScore**](data-access-impact-score) |  | [optional] 
**Modified** | Pointer to **SailPointTime** | Modification date of Data Access | [optional] 

## Methods

### NewDataAccess2

`func NewDataAccess2() *DataAccess2`

NewDataAccess2 instantiates a new DataAccess2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataAccess2WithDefaults

`func NewDataAccess2WithDefaults() *DataAccess2`

NewDataAccess2WithDefaults instantiates a new DataAccess2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicies

`func (o *DataAccess2) GetPolicies() []DataAccessPoliciesInner`

GetPolicies returns the Policies field if non-nil, zero value otherwise.

### GetPoliciesOk

`func (o *DataAccess2) GetPoliciesOk() (*[]DataAccessPoliciesInner, bool)`

GetPoliciesOk returns a tuple with the Policies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicies

`func (o *DataAccess2) SetPolicies(v []DataAccessPoliciesInner)`

SetPolicies sets Policies field to given value.

### HasPolicies

`func (o *DataAccess2) HasPolicies() bool`

HasPolicies returns a boolean if a field has been set.

### GetCategories

`func (o *DataAccess2) GetCategories() []DataAccessCategoriesInner`

GetCategories returns the Categories field if non-nil, zero value otherwise.

### GetCategoriesOk

`func (o *DataAccess2) GetCategoriesOk() (*[]DataAccessCategoriesInner, bool)`

GetCategoriesOk returns a tuple with the Categories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategories

`func (o *DataAccess2) SetCategories(v []DataAccessCategoriesInner)`

SetCategories sets Categories field to given value.

### HasCategories

`func (o *DataAccess2) HasCategories() bool`

HasCategories returns a boolean if a field has been set.

### GetImpactScore

`func (o *DataAccess2) GetImpactScore() DataAccessImpactScore`

GetImpactScore returns the ImpactScore field if non-nil, zero value otherwise.

### GetImpactScoreOk

`func (o *DataAccess2) GetImpactScoreOk() (*DataAccessImpactScore, bool)`

GetImpactScoreOk returns a tuple with the ImpactScore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImpactScore

`func (o *DataAccess2) SetImpactScore(v DataAccessImpactScore)`

SetImpactScore sets ImpactScore field to given value.

### HasImpactScore

`func (o *DataAccess2) HasImpactScore() bool`

HasImpactScore returns a boolean if a field has been set.

### GetModified

`func (o *DataAccess2) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *DataAccess2) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *DataAccess2) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *DataAccess2) HasModified() bool`

HasModified returns a boolean if a field has been set.


