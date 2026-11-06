# CampaignFilterUpdate

# CampaignFilterUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | This is campaign filter's name. | 
**Description** | **string** | This is campaign filter's description. | 
**Mode** | **CampaignFilterType** |  | 
**CriteriaList** | [**[]Criteria**](criteria) | List of criteria. | 

## Methods

### NewCampaignFilterUpdate

`func NewCampaignFilterUpdate(name string, description string, mode CampaignFilterType, criteriaList []Criteria, ) *CampaignFilterUpdate`

NewCampaignFilterUpdate instantiates a new CampaignFilterUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignFilterUpdateWithDefaults

`func NewCampaignFilterUpdateWithDefaults() *CampaignFilterUpdate`

NewCampaignFilterUpdateWithDefaults instantiates a new CampaignFilterUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CampaignFilterUpdate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignFilterUpdate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignFilterUpdate) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaignFilterUpdate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignFilterUpdate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignFilterUpdate) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetMode

`func (o *CampaignFilterUpdate) GetMode() CampaignFilterType`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *CampaignFilterUpdate) GetModeOk() (*CampaignFilterType, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *CampaignFilterUpdate) SetMode(v CampaignFilterType)`

SetMode sets Mode field to given value.


### GetCriteriaList

`func (o *CampaignFilterUpdate) GetCriteriaList() []Criteria`

GetCriteriaList returns the CriteriaList field if non-nil, zero value otherwise.

### GetCriteriaListOk

`func (o *CampaignFilterUpdate) GetCriteriaListOk() (*[]Criteria, bool)`

GetCriteriaListOk returns a tuple with the CriteriaList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaList

`func (o *CampaignFilterUpdate) SetCriteriaList(v []Criteria)`

SetCriteriaList sets CriteriaList field to given value.



