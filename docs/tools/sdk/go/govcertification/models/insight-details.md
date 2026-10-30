# InsightDetails

# InsightDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | Pointer to **string** | Search query that selects the access included in the insight. | [optional] 
**IdentityIdFilter** | Pointer to **[]string** | Identity IDs used to limit the insight to specific identities. | [optional] 
**Type** | Pointer to **ScopedAccessType** |  | [optional] 
**CampaignType** | Pointer to **string** | The type of search campaign. Can only be IDENTITY | [optional] 

## Methods

### NewInsightDetails

`func NewInsightDetails() *InsightDetails`

NewInsightDetails instantiates a new InsightDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInsightDetailsWithDefaults

`func NewInsightDetailsWithDefaults() *InsightDetails`

NewInsightDetailsWithDefaults instantiates a new InsightDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *InsightDetails) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *InsightDetails) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *InsightDetails) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *InsightDetails) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetIdentityIdFilter

`func (o *InsightDetails) GetIdentityIdFilter() []string`

GetIdentityIdFilter returns the IdentityIdFilter field if non-nil, zero value otherwise.

### GetIdentityIdFilterOk

`func (o *InsightDetails) GetIdentityIdFilterOk() (*[]string, bool)`

GetIdentityIdFilterOk returns a tuple with the IdentityIdFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityIdFilter

`func (o *InsightDetails) SetIdentityIdFilter(v []string)`

SetIdentityIdFilter sets IdentityIdFilter field to given value.

### HasIdentityIdFilter

`func (o *InsightDetails) HasIdentityIdFilter() bool`

HasIdentityIdFilter returns a boolean if a field has been set.

### GetType

`func (o *InsightDetails) GetType() ScopedAccessType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *InsightDetails) GetTypeOk() (*ScopedAccessType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *InsightDetails) SetType(v ScopedAccessType)`

SetType sets Type field to given value.

### HasType

`func (o *InsightDetails) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCampaignType

`func (o *InsightDetails) GetCampaignType() string`

GetCampaignType returns the CampaignType field if non-nil, zero value otherwise.

### GetCampaignTypeOk

`func (o *InsightDetails) GetCampaignTypeOk() (*string, bool)`

GetCampaignTypeOk returns a tuple with the CampaignType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignType

`func (o *InsightDetails) SetCampaignType(v string)`

SetCampaignType sets CampaignType field to given value.

### HasCampaignType

`func (o *InsightDetails) HasCampaignType() bool`

HasCampaignType returns a boolean if a field has been set.


