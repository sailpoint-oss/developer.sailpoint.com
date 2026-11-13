# CampaignSearchBasedParams

# CampaignSearchBasedParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SearchType** | Pointer to **string** | If the campaign type is `Identity`, then the searchType must be set. | [optional] 
**Query** | Pointer to **string** | The scope for the campaign. If the searchType is `Identity`, then one of `query` or `identityIds` must be set. | [optional] 
**IdentityIds** | Pointer to **[]string** | A direct list of identities to include in this campaign. If the searchType is `Identity`, then one of `query` or `identityIds` must be set. | [optional] 
**AccessConstraints** | Pointer to [**[]AccessConstraint**](access-constraint) | Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access. | [optional] 

## Methods

### NewCampaignSearchBasedParams

`func NewCampaignSearchBasedParams() *CampaignSearchBasedParams`

NewCampaignSearchBasedParams instantiates a new CampaignSearchBasedParams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignSearchBasedParamsWithDefaults

`func NewCampaignSearchBasedParamsWithDefaults() *CampaignSearchBasedParams`

NewCampaignSearchBasedParamsWithDefaults instantiates a new CampaignSearchBasedParams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSearchType

`func (o *CampaignSearchBasedParams) GetSearchType() string`

GetSearchType returns the SearchType field if non-nil, zero value otherwise.

### GetSearchTypeOk

`func (o *CampaignSearchBasedParams) GetSearchTypeOk() (*string, bool)`

GetSearchTypeOk returns a tuple with the SearchType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchType

`func (o *CampaignSearchBasedParams) SetSearchType(v string)`

SetSearchType sets SearchType field to given value.

### HasSearchType

`func (o *CampaignSearchBasedParams) HasSearchType() bool`

HasSearchType returns a boolean if a field has been set.

### GetQuery

`func (o *CampaignSearchBasedParams) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *CampaignSearchBasedParams) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *CampaignSearchBasedParams) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *CampaignSearchBasedParams) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetIdentityIds

`func (o *CampaignSearchBasedParams) GetIdentityIds() []string`

GetIdentityIds returns the IdentityIds field if non-nil, zero value otherwise.

### GetIdentityIdsOk

`func (o *CampaignSearchBasedParams) GetIdentityIdsOk() (*[]string, bool)`

GetIdentityIdsOk returns a tuple with the IdentityIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityIds

`func (o *CampaignSearchBasedParams) SetIdentityIds(v []string)`

SetIdentityIds sets IdentityIds field to given value.

### HasIdentityIds

`func (o *CampaignSearchBasedParams) HasIdentityIds() bool`

HasIdentityIds returns a boolean if a field has been set.

### GetAccessConstraints

`func (o *CampaignSearchBasedParams) GetAccessConstraints() []AccessConstraint`

GetAccessConstraints returns the AccessConstraints field if non-nil, zero value otherwise.

### GetAccessConstraintsOk

`func (o *CampaignSearchBasedParams) GetAccessConstraintsOk() (*[]AccessConstraint, bool)`

GetAccessConstraintsOk returns a tuple with the AccessConstraints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessConstraints

`func (o *CampaignSearchBasedParams) SetAccessConstraints(v []AccessConstraint)`

SetAccessConstraints sets AccessConstraints field to given value.

### HasAccessConstraints

`func (o *CampaignSearchBasedParams) HasAccessConstraints() bool`

HasAccessConstraints returns a boolean if a field has been set.


