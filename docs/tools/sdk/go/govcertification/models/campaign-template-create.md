# CampaignTemplateCreate

# CampaignTemplateCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the campaign template. | 
**Description** | **string** | Description of the campaign template. | 
**Type** | **CampaignType** |  | 
**RemediatorRef** | Pointer to [**CampaignRemediatorRef**](campaign-remediator-ref) |  | [optional] 
**MandatoryCommentRequirement** | Pointer to **CampaignMandatoryCommentRequirement** |  | [optional] [default to CAMPAIGNMANDATORYCOMMENTREQUIREMENT_NO_DECISIONS]
**EmailNotificationEnabled** | **bool** | Enables email notification for this campaign | [default to false]
**AutoRevokeAllowed** | **bool** | Allows auto revoke for this campaign | [default to false]
**RecommendationsEnabled** | **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [default to false]
**SunsetCommentsRequired** | **bool** | Determines if comments on sunset date changes are required. | [default to true]
**Reviewer** | [**Reviewer**](reviewer) |  | 
**DeadlineDuration** | Pointer to **string** | The time period during which the campaign should be completed, formatted as an ISO-8601 Duration. When this template generates a campaign, the campaign's deadline will be the current date plus this duration. For example, if generation occurred on 2020-01-01 and this field was \"P2W\" (two weeks), the resulting campaign's deadline would be 2020-01-15 (the current date plus 14 days). | [optional] 
**CampaignName** | **string** | The campaign name. Special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | 
**CampaignDescription** | **string** | The campaign description. Special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | 
**FilterRef** | Pointer to [**CampaignFilterIdRef**](campaign-filter-id-ref) |  | [optional] 
**SearchBasedParams** | Pointer to [**CampaignSearchBasedParams**](campaign-search-based-params) |  | [optional] 
**SourceIds** | Pointer to **[]string** | A direct list of sourceIds to include in this campaign. | [optional] 

## Methods

### NewCampaignTemplateCreate

`func NewCampaignTemplateCreate(name string, description string, type_ CampaignType, emailNotificationEnabled bool, autoRevokeAllowed bool, recommendationsEnabled bool, sunsetCommentsRequired bool, reviewer Reviewer, campaignName string, campaignDescription string, ) *CampaignTemplateCreate`

NewCampaignTemplateCreate instantiates a new CampaignTemplateCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignTemplateCreateWithDefaults

`func NewCampaignTemplateCreateWithDefaults() *CampaignTemplateCreate`

NewCampaignTemplateCreateWithDefaults instantiates a new CampaignTemplateCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CampaignTemplateCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignTemplateCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignTemplateCreate) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaignTemplateCreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignTemplateCreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignTemplateCreate) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *CampaignTemplateCreate) GetType() CampaignType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignTemplateCreate) GetTypeOk() (*CampaignType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignTemplateCreate) SetType(v CampaignType)`

SetType sets Type field to given value.


### GetRemediatorRef

`func (o *CampaignTemplateCreate) GetRemediatorRef() CampaignRemediatorRef`

GetRemediatorRef returns the RemediatorRef field if non-nil, zero value otherwise.

### GetRemediatorRefOk

`func (o *CampaignTemplateCreate) GetRemediatorRefOk() (*CampaignRemediatorRef, bool)`

GetRemediatorRefOk returns a tuple with the RemediatorRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemediatorRef

`func (o *CampaignTemplateCreate) SetRemediatorRef(v CampaignRemediatorRef)`

SetRemediatorRef sets RemediatorRef field to given value.

### HasRemediatorRef

`func (o *CampaignTemplateCreate) HasRemediatorRef() bool`

HasRemediatorRef returns a boolean if a field has been set.

### GetMandatoryCommentRequirement

`func (o *CampaignTemplateCreate) GetMandatoryCommentRequirement() CampaignMandatoryCommentRequirement`

GetMandatoryCommentRequirement returns the MandatoryCommentRequirement field if non-nil, zero value otherwise.

### GetMandatoryCommentRequirementOk

`func (o *CampaignTemplateCreate) GetMandatoryCommentRequirementOk() (*CampaignMandatoryCommentRequirement, bool)`

GetMandatoryCommentRequirementOk returns a tuple with the MandatoryCommentRequirement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatoryCommentRequirement

`func (o *CampaignTemplateCreate) SetMandatoryCommentRequirement(v CampaignMandatoryCommentRequirement)`

SetMandatoryCommentRequirement sets MandatoryCommentRequirement field to given value.

### HasMandatoryCommentRequirement

`func (o *CampaignTemplateCreate) HasMandatoryCommentRequirement() bool`

HasMandatoryCommentRequirement returns a boolean if a field has been set.

### GetEmailNotificationEnabled

`func (o *CampaignTemplateCreate) GetEmailNotificationEnabled() bool`

GetEmailNotificationEnabled returns the EmailNotificationEnabled field if non-nil, zero value otherwise.

### GetEmailNotificationEnabledOk

`func (o *CampaignTemplateCreate) GetEmailNotificationEnabledOk() (*bool, bool)`

GetEmailNotificationEnabledOk returns a tuple with the EmailNotificationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailNotificationEnabled

`func (o *CampaignTemplateCreate) SetEmailNotificationEnabled(v bool)`

SetEmailNotificationEnabled sets EmailNotificationEnabled field to given value.


### GetAutoRevokeAllowed

`func (o *CampaignTemplateCreate) GetAutoRevokeAllowed() bool`

GetAutoRevokeAllowed returns the AutoRevokeAllowed field if non-nil, zero value otherwise.

### GetAutoRevokeAllowedOk

`func (o *CampaignTemplateCreate) GetAutoRevokeAllowedOk() (*bool, bool)`

GetAutoRevokeAllowedOk returns a tuple with the AutoRevokeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRevokeAllowed

`func (o *CampaignTemplateCreate) SetAutoRevokeAllowed(v bool)`

SetAutoRevokeAllowed sets AutoRevokeAllowed field to given value.


### GetRecommendationsEnabled

`func (o *CampaignTemplateCreate) GetRecommendationsEnabled() bool`

GetRecommendationsEnabled returns the RecommendationsEnabled field if non-nil, zero value otherwise.

### GetRecommendationsEnabledOk

`func (o *CampaignTemplateCreate) GetRecommendationsEnabledOk() (*bool, bool)`

GetRecommendationsEnabledOk returns a tuple with the RecommendationsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationsEnabled

`func (o *CampaignTemplateCreate) SetRecommendationsEnabled(v bool)`

SetRecommendationsEnabled sets RecommendationsEnabled field to given value.


### GetSunsetCommentsRequired

`func (o *CampaignTemplateCreate) GetSunsetCommentsRequired() bool`

GetSunsetCommentsRequired returns the SunsetCommentsRequired field if non-nil, zero value otherwise.

### GetSunsetCommentsRequiredOk

`func (o *CampaignTemplateCreate) GetSunsetCommentsRequiredOk() (*bool, bool)`

GetSunsetCommentsRequiredOk returns a tuple with the SunsetCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunsetCommentsRequired

`func (o *CampaignTemplateCreate) SetSunsetCommentsRequired(v bool)`

SetSunsetCommentsRequired sets SunsetCommentsRequired field to given value.


### GetReviewer

`func (o *CampaignTemplateCreate) GetReviewer() Reviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *CampaignTemplateCreate) GetReviewerOk() (*Reviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *CampaignTemplateCreate) SetReviewer(v Reviewer)`

SetReviewer sets Reviewer field to given value.


### GetDeadlineDuration

`func (o *CampaignTemplateCreate) GetDeadlineDuration() string`

GetDeadlineDuration returns the DeadlineDuration field if non-nil, zero value otherwise.

### GetDeadlineDurationOk

`func (o *CampaignTemplateCreate) GetDeadlineDurationOk() (*string, bool)`

GetDeadlineDurationOk returns a tuple with the DeadlineDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadlineDuration

`func (o *CampaignTemplateCreate) SetDeadlineDuration(v string)`

SetDeadlineDuration sets DeadlineDuration field to given value.

### HasDeadlineDuration

`func (o *CampaignTemplateCreate) HasDeadlineDuration() bool`

HasDeadlineDuration returns a boolean if a field has been set.

### GetCampaignName

`func (o *CampaignTemplateCreate) GetCampaignName() string`

GetCampaignName returns the CampaignName field if non-nil, zero value otherwise.

### GetCampaignNameOk

`func (o *CampaignTemplateCreate) GetCampaignNameOk() (*string, bool)`

GetCampaignNameOk returns a tuple with the CampaignName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignName

`func (o *CampaignTemplateCreate) SetCampaignName(v string)`

SetCampaignName sets CampaignName field to given value.


### GetCampaignDescription

`func (o *CampaignTemplateCreate) GetCampaignDescription() string`

GetCampaignDescription returns the CampaignDescription field if non-nil, zero value otherwise.

### GetCampaignDescriptionOk

`func (o *CampaignTemplateCreate) GetCampaignDescriptionOk() (*string, bool)`

GetCampaignDescriptionOk returns a tuple with the CampaignDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignDescription

`func (o *CampaignTemplateCreate) SetCampaignDescription(v string)`

SetCampaignDescription sets CampaignDescription field to given value.


### GetFilterRef

`func (o *CampaignTemplateCreate) GetFilterRef() CampaignFilterIdRef`

GetFilterRef returns the FilterRef field if non-nil, zero value otherwise.

### GetFilterRefOk

`func (o *CampaignTemplateCreate) GetFilterRefOk() (*CampaignFilterIdRef, bool)`

GetFilterRefOk returns a tuple with the FilterRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterRef

`func (o *CampaignTemplateCreate) SetFilterRef(v CampaignFilterIdRef)`

SetFilterRef sets FilterRef field to given value.

### HasFilterRef

`func (o *CampaignTemplateCreate) HasFilterRef() bool`

HasFilterRef returns a boolean if a field has been set.

### GetSearchBasedParams

`func (o *CampaignTemplateCreate) GetSearchBasedParams() CampaignSearchBasedParams`

GetSearchBasedParams returns the SearchBasedParams field if non-nil, zero value otherwise.

### GetSearchBasedParamsOk

`func (o *CampaignTemplateCreate) GetSearchBasedParamsOk() (*CampaignSearchBasedParams, bool)`

GetSearchBasedParamsOk returns a tuple with the SearchBasedParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchBasedParams

`func (o *CampaignTemplateCreate) SetSearchBasedParams(v CampaignSearchBasedParams)`

SetSearchBasedParams sets SearchBasedParams field to given value.

### HasSearchBasedParams

`func (o *CampaignTemplateCreate) HasSearchBasedParams() bool`

HasSearchBasedParams returns a boolean if a field has been set.

### GetSourceIds

`func (o *CampaignTemplateCreate) GetSourceIds() []string`

GetSourceIds returns the SourceIds field if non-nil, zero value otherwise.

### GetSourceIdsOk

`func (o *CampaignTemplateCreate) GetSourceIdsOk() (*[]string, bool)`

GetSourceIdsOk returns a tuple with the SourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIds

`func (o *CampaignTemplateCreate) SetSourceIds(v []string)`

SetSourceIds sets SourceIds field to given value.

### HasSourceIds

`func (o *CampaignTemplateCreate) HasSourceIds() bool`

HasSourceIds returns a boolean if a field has been set.


