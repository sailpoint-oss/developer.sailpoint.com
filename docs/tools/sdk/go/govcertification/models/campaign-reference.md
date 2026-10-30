# CampaignReference

# CampaignReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the campaign. | 
**Name** | **string** | The name of the campaign. | 
**Description** | Pointer to **string** | The description of the campaign set by the admin who created it. | [optional] 
**Type** | Pointer to **CampaignType** |  | [optional] 
**MandatoryCommentRequirement** | Pointer to **MandatoryCommentType** |  | [optional] 
**RecommendationsEnabled** | Pointer to **bool** | Indicates if the campaign related recommendations enabled. | [optional] [default to false]
**Reviewer** | Pointer to [**CampaignReferenceReviewer**](campaign-reference-reviewer) |  | [optional] 
**GenerationType** | Pointer to **CampaignGenerationType** |  | [optional] 

## Methods

### NewCampaignReference

`func NewCampaignReference(id string, name string, ) *CampaignReference`

NewCampaignReference instantiates a new CampaignReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignReferenceWithDefaults

`func NewCampaignReferenceWithDefaults() *CampaignReference`

NewCampaignReferenceWithDefaults instantiates a new CampaignReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignReference) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *CampaignReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignReference) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaignReference) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignReference) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignReference) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CampaignReference) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *CampaignReference) GetType() CampaignType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignReference) GetTypeOk() (*CampaignType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignReference) SetType(v CampaignType)`

SetType sets Type field to given value.

### HasType

`func (o *CampaignReference) HasType() bool`

HasType returns a boolean if a field has been set.

### GetMandatoryCommentRequirement

`func (o *CampaignReference) GetMandatoryCommentRequirement() MandatoryCommentType`

GetMandatoryCommentRequirement returns the MandatoryCommentRequirement field if non-nil, zero value otherwise.

### GetMandatoryCommentRequirementOk

`func (o *CampaignReference) GetMandatoryCommentRequirementOk() (*MandatoryCommentType, bool)`

GetMandatoryCommentRequirementOk returns a tuple with the MandatoryCommentRequirement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatoryCommentRequirement

`func (o *CampaignReference) SetMandatoryCommentRequirement(v MandatoryCommentType)`

SetMandatoryCommentRequirement sets MandatoryCommentRequirement field to given value.

### HasMandatoryCommentRequirement

`func (o *CampaignReference) HasMandatoryCommentRequirement() bool`

HasMandatoryCommentRequirement returns a boolean if a field has been set.

### GetRecommendationsEnabled

`func (o *CampaignReference) GetRecommendationsEnabled() bool`

GetRecommendationsEnabled returns the RecommendationsEnabled field if non-nil, zero value otherwise.

### GetRecommendationsEnabledOk

`func (o *CampaignReference) GetRecommendationsEnabledOk() (*bool, bool)`

GetRecommendationsEnabledOk returns a tuple with the RecommendationsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationsEnabled

`func (o *CampaignReference) SetRecommendationsEnabled(v bool)`

SetRecommendationsEnabled sets RecommendationsEnabled field to given value.

### HasRecommendationsEnabled

`func (o *CampaignReference) HasRecommendationsEnabled() bool`

HasRecommendationsEnabled returns a boolean if a field has been set.

### GetReviewer

`func (o *CampaignReference) GetReviewer() CampaignReferenceReviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *CampaignReference) GetReviewerOk() (*CampaignReferenceReviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *CampaignReference) SetReviewer(v CampaignReferenceReviewer)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *CampaignReference) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### GetGenerationType

`func (o *CampaignReference) GetGenerationType() CampaignGenerationType`

GetGenerationType returns the GenerationType field if non-nil, zero value otherwise.

### GetGenerationTypeOk

`func (o *CampaignReference) GetGenerationTypeOk() (*CampaignGenerationType, bool)`

GetGenerationTypeOk returns a tuple with the GenerationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerationType

`func (o *CampaignReference) SetGenerationType(v CampaignGenerationType)`

SetGenerationType sets GenerationType field to given value.

### HasGenerationType

`func (o *CampaignReference) HasGenerationType() bool`

HasGenerationType returns a boolean if a field has been set.


