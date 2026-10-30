# CampaignFilterCreate

# CampaignFilterCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | This is campaign filter's name. | 
**Description** | **string** | This is campaign filter's description. | 
**Mode** | **CampaignFilterType** |  | 
**CriteriaList** | [**[]Criteria**](criteria) | List of criteria. | 

## Methods

### NewCampaignFilterCreate

`func NewCampaignFilterCreate(name string, description string, mode CampaignFilterType, criteriaList []Criteria, ) *CampaignFilterCreate`

NewCampaignFilterCreate instantiates a new CampaignFilterCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignFilterCreateWithDefaults

`func NewCampaignFilterCreateWithDefaults() *CampaignFilterCreate`

NewCampaignFilterCreateWithDefaults instantiates a new CampaignFilterCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CampaignFilterCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignFilterCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignFilterCreate) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaignFilterCreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignFilterCreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignFilterCreate) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetMode

`func (o *CampaignFilterCreate) GetMode() CampaignFilterType`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *CampaignFilterCreate) GetModeOk() (*CampaignFilterType, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *CampaignFilterCreate) SetMode(v CampaignFilterType)`

SetMode sets Mode field to given value.


### GetCriteriaList

`func (o *CampaignFilterCreate) GetCriteriaList() []Criteria`

GetCriteriaList returns the CriteriaList field if non-nil, zero value otherwise.

### GetCriteriaListOk

`func (o *CampaignFilterCreate) GetCriteriaListOk() (*[]Criteria, bool)`

GetCriteriaListOk returns a tuple with the CriteriaList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaList

`func (o *CampaignFilterCreate) SetCriteriaList(v []Criteria)`

SetCriteriaList sets CriteriaList field to given value.



