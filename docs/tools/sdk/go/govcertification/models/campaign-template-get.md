# CampaignTemplateGet

# CampaignTemplateGet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | ID of the campaign template | 
**Name** | **string** | Name of the campaign template. | 
**Description** | **string** | Description of the campaign template. | 
**Type** | **CampaignType** |  | 
**OwnerId** | **string** | The owner of this template, and the owner of campaigns generated from this template via a schedule. This field is automatically populated at creation time with the current user. | [readonly] 
**RemediatorRef** | Pointer to [**CampaignRemediatorRef**](campaign-remediator-ref) |  | [optional] 
**MandatoryCommentRequirement** | Pointer to **CampaignMandatoryCommentRequirement** |  | [optional] [default to CAMPAIGNMANDATORYCOMMENTREQUIREMENT_NO_DECISIONS]
**EmailNotificationEnabled** | Pointer to **bool** | Enables email notification for this campaign | [optional] [default to false]
**AutoRevokeAllowed** | Pointer to **bool** | Allows auto revoke for this campaign | [optional] [default to false]
**RecommendationsEnabled** | Pointer to **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to false]
**SunsetCommentsRequired** | Pointer to **bool** | Determines if comments on sunset date changes are required. | [optional] [default to true]
**Reviewer** | [**Reviewer**](reviewer) |  | 
**DeadlineDuration** | Pointer to **string** | The time period during which the campaign should be completed, formatted as an ISO-8601 Duration. When this template generates a campaign, the campaign's deadline will be the current date plus this duration. For example, if generation occurred on 2020-01-01 and this field was \"P2W\" (two weeks), the resulting campaign's deadline would be 2020-01-15 (the current date plus 14 days). If it is passed as empty then deadline is not set, but this need to be set before campaign activation api by using PATCH operation | [optional] 
**CampaignName** | **string** | The campaign name. | 
**CampaignDescription** | **string** | The campaign description. | 
**FilterRef** | Pointer to [**CampaignFilterRef**](campaign-filter-ref) |  | [optional] 
**SearchBasedParams** | Pointer to [**CampaignSearchBasedParams**](campaign-search-based-params) |  | [optional] 
**SourceIds** | Pointer to **[]string** | A direct list of sourceIds to include in this campaign. | [optional] 
**Schedule** | Pointer to [**Schedule**](schedule) |  | [optional] 
**ScheduleStatus** | Pointer to **string** | Used to determine current status of campaign template schedule | [optional] [readonly] 
**ScheduleError** | Pointer to **string** | Details about scheduling error | [optional] [readonly] 
**Created** | **SailPointTime** | Creation date of Campaign Template | [readonly] 
**Modified** | **SailPointTime** | Modification date of Campaign Template | [readonly] 

## Methods

### NewCampaignTemplateGet

`func NewCampaignTemplateGet(id string, name string, description string, type_ CampaignType, ownerId string, reviewer Reviewer, campaignName string, campaignDescription string, created SailPointTime, modified SailPointTime, ) *CampaignTemplateGet`

NewCampaignTemplateGet instantiates a new CampaignTemplateGet object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignTemplateGetWithDefaults

`func NewCampaignTemplateGetWithDefaults() *CampaignTemplateGet`

NewCampaignTemplateGetWithDefaults instantiates a new CampaignTemplateGet object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignTemplateGet) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignTemplateGet) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignTemplateGet) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *CampaignTemplateGet) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignTemplateGet) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignTemplateGet) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaignTemplateGet) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignTemplateGet) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignTemplateGet) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *CampaignTemplateGet) GetType() CampaignType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignTemplateGet) GetTypeOk() (*CampaignType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignTemplateGet) SetType(v CampaignType)`

SetType sets Type field to given value.


### GetOwnerId

`func (o *CampaignTemplateGet) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *CampaignTemplateGet) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *CampaignTemplateGet) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.


### GetRemediatorRef

`func (o *CampaignTemplateGet) GetRemediatorRef() CampaignRemediatorRef`

GetRemediatorRef returns the RemediatorRef field if non-nil, zero value otherwise.

### GetRemediatorRefOk

`func (o *CampaignTemplateGet) GetRemediatorRefOk() (*CampaignRemediatorRef, bool)`

GetRemediatorRefOk returns a tuple with the RemediatorRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemediatorRef

`func (o *CampaignTemplateGet) SetRemediatorRef(v CampaignRemediatorRef)`

SetRemediatorRef sets RemediatorRef field to given value.

### HasRemediatorRef

`func (o *CampaignTemplateGet) HasRemediatorRef() bool`

HasRemediatorRef returns a boolean if a field has been set.

### GetMandatoryCommentRequirement

`func (o *CampaignTemplateGet) GetMandatoryCommentRequirement() CampaignMandatoryCommentRequirement`

GetMandatoryCommentRequirement returns the MandatoryCommentRequirement field if non-nil, zero value otherwise.

### GetMandatoryCommentRequirementOk

`func (o *CampaignTemplateGet) GetMandatoryCommentRequirementOk() (*CampaignMandatoryCommentRequirement, bool)`

GetMandatoryCommentRequirementOk returns a tuple with the MandatoryCommentRequirement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatoryCommentRequirement

`func (o *CampaignTemplateGet) SetMandatoryCommentRequirement(v CampaignMandatoryCommentRequirement)`

SetMandatoryCommentRequirement sets MandatoryCommentRequirement field to given value.

### HasMandatoryCommentRequirement

`func (o *CampaignTemplateGet) HasMandatoryCommentRequirement() bool`

HasMandatoryCommentRequirement returns a boolean if a field has been set.

### GetEmailNotificationEnabled

`func (o *CampaignTemplateGet) GetEmailNotificationEnabled() bool`

GetEmailNotificationEnabled returns the EmailNotificationEnabled field if non-nil, zero value otherwise.

### GetEmailNotificationEnabledOk

`func (o *CampaignTemplateGet) GetEmailNotificationEnabledOk() (*bool, bool)`

GetEmailNotificationEnabledOk returns a tuple with the EmailNotificationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailNotificationEnabled

`func (o *CampaignTemplateGet) SetEmailNotificationEnabled(v bool)`

SetEmailNotificationEnabled sets EmailNotificationEnabled field to given value.

### HasEmailNotificationEnabled

`func (o *CampaignTemplateGet) HasEmailNotificationEnabled() bool`

HasEmailNotificationEnabled returns a boolean if a field has been set.

### GetAutoRevokeAllowed

`func (o *CampaignTemplateGet) GetAutoRevokeAllowed() bool`

GetAutoRevokeAllowed returns the AutoRevokeAllowed field if non-nil, zero value otherwise.

### GetAutoRevokeAllowedOk

`func (o *CampaignTemplateGet) GetAutoRevokeAllowedOk() (*bool, bool)`

GetAutoRevokeAllowedOk returns a tuple with the AutoRevokeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRevokeAllowed

`func (o *CampaignTemplateGet) SetAutoRevokeAllowed(v bool)`

SetAutoRevokeAllowed sets AutoRevokeAllowed field to given value.

### HasAutoRevokeAllowed

`func (o *CampaignTemplateGet) HasAutoRevokeAllowed() bool`

HasAutoRevokeAllowed returns a boolean if a field has been set.

### GetRecommendationsEnabled

`func (o *CampaignTemplateGet) GetRecommendationsEnabled() bool`

GetRecommendationsEnabled returns the RecommendationsEnabled field if non-nil, zero value otherwise.

### GetRecommendationsEnabledOk

`func (o *CampaignTemplateGet) GetRecommendationsEnabledOk() (*bool, bool)`

GetRecommendationsEnabledOk returns a tuple with the RecommendationsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationsEnabled

`func (o *CampaignTemplateGet) SetRecommendationsEnabled(v bool)`

SetRecommendationsEnabled sets RecommendationsEnabled field to given value.

### HasRecommendationsEnabled

`func (o *CampaignTemplateGet) HasRecommendationsEnabled() bool`

HasRecommendationsEnabled returns a boolean if a field has been set.

### GetSunsetCommentsRequired

`func (o *CampaignTemplateGet) GetSunsetCommentsRequired() bool`

GetSunsetCommentsRequired returns the SunsetCommentsRequired field if non-nil, zero value otherwise.

### GetSunsetCommentsRequiredOk

`func (o *CampaignTemplateGet) GetSunsetCommentsRequiredOk() (*bool, bool)`

GetSunsetCommentsRequiredOk returns a tuple with the SunsetCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunsetCommentsRequired

`func (o *CampaignTemplateGet) SetSunsetCommentsRequired(v bool)`

SetSunsetCommentsRequired sets SunsetCommentsRequired field to given value.

### HasSunsetCommentsRequired

`func (o *CampaignTemplateGet) HasSunsetCommentsRequired() bool`

HasSunsetCommentsRequired returns a boolean if a field has been set.

### GetReviewer

`func (o *CampaignTemplateGet) GetReviewer() Reviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *CampaignTemplateGet) GetReviewerOk() (*Reviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *CampaignTemplateGet) SetReviewer(v Reviewer)`

SetReviewer sets Reviewer field to given value.


### GetDeadlineDuration

`func (o *CampaignTemplateGet) GetDeadlineDuration() string`

GetDeadlineDuration returns the DeadlineDuration field if non-nil, zero value otherwise.

### GetDeadlineDurationOk

`func (o *CampaignTemplateGet) GetDeadlineDurationOk() (*string, bool)`

GetDeadlineDurationOk returns a tuple with the DeadlineDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadlineDuration

`func (o *CampaignTemplateGet) SetDeadlineDuration(v string)`

SetDeadlineDuration sets DeadlineDuration field to given value.

### HasDeadlineDuration

`func (o *CampaignTemplateGet) HasDeadlineDuration() bool`

HasDeadlineDuration returns a boolean if a field has been set.

### GetCampaignName

`func (o *CampaignTemplateGet) GetCampaignName() string`

GetCampaignName returns the CampaignName field if non-nil, zero value otherwise.

### GetCampaignNameOk

`func (o *CampaignTemplateGet) GetCampaignNameOk() (*string, bool)`

GetCampaignNameOk returns a tuple with the CampaignName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignName

`func (o *CampaignTemplateGet) SetCampaignName(v string)`

SetCampaignName sets CampaignName field to given value.


### GetCampaignDescription

`func (o *CampaignTemplateGet) GetCampaignDescription() string`

GetCampaignDescription returns the CampaignDescription field if non-nil, zero value otherwise.

### GetCampaignDescriptionOk

`func (o *CampaignTemplateGet) GetCampaignDescriptionOk() (*string, bool)`

GetCampaignDescriptionOk returns a tuple with the CampaignDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignDescription

`func (o *CampaignTemplateGet) SetCampaignDescription(v string)`

SetCampaignDescription sets CampaignDescription field to given value.


### GetFilterRef

`func (o *CampaignTemplateGet) GetFilterRef() CampaignFilterRef`

GetFilterRef returns the FilterRef field if non-nil, zero value otherwise.

### GetFilterRefOk

`func (o *CampaignTemplateGet) GetFilterRefOk() (*CampaignFilterRef, bool)`

GetFilterRefOk returns a tuple with the FilterRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterRef

`func (o *CampaignTemplateGet) SetFilterRef(v CampaignFilterRef)`

SetFilterRef sets FilterRef field to given value.

### HasFilterRef

`func (o *CampaignTemplateGet) HasFilterRef() bool`

HasFilterRef returns a boolean if a field has been set.

### GetSearchBasedParams

`func (o *CampaignTemplateGet) GetSearchBasedParams() CampaignSearchBasedParams`

GetSearchBasedParams returns the SearchBasedParams field if non-nil, zero value otherwise.

### GetSearchBasedParamsOk

`func (o *CampaignTemplateGet) GetSearchBasedParamsOk() (*CampaignSearchBasedParams, bool)`

GetSearchBasedParamsOk returns a tuple with the SearchBasedParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchBasedParams

`func (o *CampaignTemplateGet) SetSearchBasedParams(v CampaignSearchBasedParams)`

SetSearchBasedParams sets SearchBasedParams field to given value.

### HasSearchBasedParams

`func (o *CampaignTemplateGet) HasSearchBasedParams() bool`

HasSearchBasedParams returns a boolean if a field has been set.

### GetSourceIds

`func (o *CampaignTemplateGet) GetSourceIds() []string`

GetSourceIds returns the SourceIds field if non-nil, zero value otherwise.

### GetSourceIdsOk

`func (o *CampaignTemplateGet) GetSourceIdsOk() (*[]string, bool)`

GetSourceIdsOk returns a tuple with the SourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIds

`func (o *CampaignTemplateGet) SetSourceIds(v []string)`

SetSourceIds sets SourceIds field to given value.

### HasSourceIds

`func (o *CampaignTemplateGet) HasSourceIds() bool`

HasSourceIds returns a boolean if a field has been set.

### GetSchedule

`func (o *CampaignTemplateGet) GetSchedule() Schedule`

GetSchedule returns the Schedule field if non-nil, zero value otherwise.

### GetScheduleOk

`func (o *CampaignTemplateGet) GetScheduleOk() (*Schedule, bool)`

GetScheduleOk returns a tuple with the Schedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedule

`func (o *CampaignTemplateGet) SetSchedule(v Schedule)`

SetSchedule sets Schedule field to given value.

### HasSchedule

`func (o *CampaignTemplateGet) HasSchedule() bool`

HasSchedule returns a boolean if a field has been set.

### GetScheduleStatus

`func (o *CampaignTemplateGet) GetScheduleStatus() string`

GetScheduleStatus returns the ScheduleStatus field if non-nil, zero value otherwise.

### GetScheduleStatusOk

`func (o *CampaignTemplateGet) GetScheduleStatusOk() (*string, bool)`

GetScheduleStatusOk returns a tuple with the ScheduleStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleStatus

`func (o *CampaignTemplateGet) SetScheduleStatus(v string)`

SetScheduleStatus sets ScheduleStatus field to given value.

### HasScheduleStatus

`func (o *CampaignTemplateGet) HasScheduleStatus() bool`

HasScheduleStatus returns a boolean if a field has been set.

### GetScheduleError

`func (o *CampaignTemplateGet) GetScheduleError() string`

GetScheduleError returns the ScheduleError field if non-nil, zero value otherwise.

### GetScheduleErrorOk

`func (o *CampaignTemplateGet) GetScheduleErrorOk() (*string, bool)`

GetScheduleErrorOk returns a tuple with the ScheduleError field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleError

`func (o *CampaignTemplateGet) SetScheduleError(v string)`

SetScheduleError sets ScheduleError field to given value.

### HasScheduleError

`func (o *CampaignTemplateGet) HasScheduleError() bool`

HasScheduleError returns a boolean if a field has been set.

### GetCreated

`func (o *CampaignTemplateGet) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CampaignTemplateGet) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CampaignTemplateGet) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *CampaignTemplateGet) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CampaignTemplateGet) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CampaignTemplateGet) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.



