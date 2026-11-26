# CampaignFilterInline

# CampaignFilterInline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Mode** | **CampaignFilterType** |  | 
**CriteriaList** | [**[]Criteria**](criteria) | List of criteria. | 

## Methods

### NewCampaignFilterInline

`func NewCampaignFilterInline(mode CampaignFilterType, criteriaList []Criteria, ) *CampaignFilterInline`

NewCampaignFilterInline instantiates a new CampaignFilterInline object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignFilterInlineWithDefaults

`func NewCampaignFilterInlineWithDefaults() *CampaignFilterInline`

NewCampaignFilterInlineWithDefaults instantiates a new CampaignFilterInline object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMode

`func (o *CampaignFilterInline) GetMode() CampaignFilterType`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *CampaignFilterInline) GetModeOk() (*CampaignFilterType, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *CampaignFilterInline) SetMode(v CampaignFilterType)`

SetMode sets Mode field to given value.


### GetCriteriaList

`func (o *CampaignFilterInline) GetCriteriaList() []Criteria`

GetCriteriaList returns the CriteriaList field if non-nil, zero value otherwise.

### GetCriteriaListOk

`func (o *CampaignFilterInline) GetCriteriaListOk() (*[]Criteria, bool)`

GetCriteriaListOk returns a tuple with the CriteriaList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaList

`func (o *CampaignFilterInline) SetCriteriaList(v []Criteria)`

SetCriteriaList sets CriteriaList field to given value.



