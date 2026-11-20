# CampaignSummary

# CampaignSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the campaign | [optional] [readonly] 
**Name** | **string** | The campaign name. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | 
**Description** | **string** | The campaign description. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | 
**Deadline** | Pointer to **string** | The campaign's completion deadline date. | [optional] 
**DeadlineTimezone** | Pointer to **string** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] 
**DeadlineTime** | Pointer to **SailPointTime** | Calculated deadline time in UTC timezone of the campaign calculated from the deadline and the deadlineTimezone | [optional] 
**EmailNotificationEnabled** | Pointer to **bool** | Enables email notification for this campaign | [optional] [default to false]
**AutoRevokeAllowed** | Pointer to **bool** | Allows auto revoke for this campaign | [optional] [default to false]
**RecommendationsEnabled** | Pointer to **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to false]
**SunsetCommentsRequired** | Pointer to **bool** | Determines if comments on sunset date changes are required. | [optional] [default to true]
**MandatoryCommentRequirement** | Pointer to **CampaignMandatoryCommentRequirement** |  | [optional] [default to CAMPAIGNMANDATORYCOMMENTREQUIREMENT_NO_DECISIONS]
**Type** | **CampaignType** |  | 
**Reviewer** | Pointer to [**Reviewer**](reviewer) |  | [optional] 
**Alerts** | Pointer to [**[]Alert**](alert) | A list of errors and warnings that have accumulated. | [optional] [readonly] [default to []]
**Created** | Pointer to **SailPointTime** | Created time of the campaign | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Modified time of the campaign | [optional] [readonly] 
**TotalCertifications** | Pointer to **int32** | The total number of certifications in this campaign. | [optional] [readonly] 
**CompletedCertifications** | Pointer to **int32** | The number of completed certifications in this campaign. | [optional] [readonly] 
**Status** | Pointer to **string** | The campaign's current status. | [optional] [readonly] 
**GenerationType** | Pointer to **CampaignGenerationType** |  | [optional] [readonly] 

## Methods

### NewCampaignSummary

`func NewCampaignSummary(name string, description string, type_ CampaignType, ) *CampaignSummary`

NewCampaignSummary instantiates a new CampaignSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignSummaryWithDefaults

`func NewCampaignSummaryWithDefaults() *CampaignSummary`

NewCampaignSummaryWithDefaults instantiates a new CampaignSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignSummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignSummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignSummary) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CampaignSummary) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *CampaignSummary) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignSummary) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignSummary) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaignSummary) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignSummary) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignSummary) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetDeadline

`func (o *CampaignSummary) GetDeadline() string`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *CampaignSummary) GetDeadlineOk() (*string, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *CampaignSummary) SetDeadline(v string)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *CampaignSummary) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### GetDeadlineTimezone

`func (o *CampaignSummary) GetDeadlineTimezone() string`

GetDeadlineTimezone returns the DeadlineTimezone field if non-nil, zero value otherwise.

### GetDeadlineTimezoneOk

`func (o *CampaignSummary) GetDeadlineTimezoneOk() (*string, bool)`

GetDeadlineTimezoneOk returns a tuple with the DeadlineTimezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadlineTimezone

`func (o *CampaignSummary) SetDeadlineTimezone(v string)`

SetDeadlineTimezone sets DeadlineTimezone field to given value.

### HasDeadlineTimezone

`func (o *CampaignSummary) HasDeadlineTimezone() bool`

HasDeadlineTimezone returns a boolean if a field has been set.

### GetDeadlineTime

`func (o *CampaignSummary) GetDeadlineTime() SailPointTime`

GetDeadlineTime returns the DeadlineTime field if non-nil, zero value otherwise.

### GetDeadlineTimeOk

`func (o *CampaignSummary) GetDeadlineTimeOk() (*SailPointTime, bool)`

GetDeadlineTimeOk returns a tuple with the DeadlineTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadlineTime

`func (o *CampaignSummary) SetDeadlineTime(v SailPointTime)`

SetDeadlineTime sets DeadlineTime field to given value.

### HasDeadlineTime

`func (o *CampaignSummary) HasDeadlineTime() bool`

HasDeadlineTime returns a boolean if a field has been set.

### GetEmailNotificationEnabled

`func (o *CampaignSummary) GetEmailNotificationEnabled() bool`

GetEmailNotificationEnabled returns the EmailNotificationEnabled field if non-nil, zero value otherwise.

### GetEmailNotificationEnabledOk

`func (o *CampaignSummary) GetEmailNotificationEnabledOk() (*bool, bool)`

GetEmailNotificationEnabledOk returns a tuple with the EmailNotificationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailNotificationEnabled

`func (o *CampaignSummary) SetEmailNotificationEnabled(v bool)`

SetEmailNotificationEnabled sets EmailNotificationEnabled field to given value.

### HasEmailNotificationEnabled

`func (o *CampaignSummary) HasEmailNotificationEnabled() bool`

HasEmailNotificationEnabled returns a boolean if a field has been set.

### GetAutoRevokeAllowed

`func (o *CampaignSummary) GetAutoRevokeAllowed() bool`

GetAutoRevokeAllowed returns the AutoRevokeAllowed field if non-nil, zero value otherwise.

### GetAutoRevokeAllowedOk

`func (o *CampaignSummary) GetAutoRevokeAllowedOk() (*bool, bool)`

GetAutoRevokeAllowedOk returns a tuple with the AutoRevokeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRevokeAllowed

`func (o *CampaignSummary) SetAutoRevokeAllowed(v bool)`

SetAutoRevokeAllowed sets AutoRevokeAllowed field to given value.

### HasAutoRevokeAllowed

`func (o *CampaignSummary) HasAutoRevokeAllowed() bool`

HasAutoRevokeAllowed returns a boolean if a field has been set.

### GetRecommendationsEnabled

`func (o *CampaignSummary) GetRecommendationsEnabled() bool`

GetRecommendationsEnabled returns the RecommendationsEnabled field if non-nil, zero value otherwise.

### GetRecommendationsEnabledOk

`func (o *CampaignSummary) GetRecommendationsEnabledOk() (*bool, bool)`

GetRecommendationsEnabledOk returns a tuple with the RecommendationsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationsEnabled

`func (o *CampaignSummary) SetRecommendationsEnabled(v bool)`

SetRecommendationsEnabled sets RecommendationsEnabled field to given value.

### HasRecommendationsEnabled

`func (o *CampaignSummary) HasRecommendationsEnabled() bool`

HasRecommendationsEnabled returns a boolean if a field has been set.

### GetSunsetCommentsRequired

`func (o *CampaignSummary) GetSunsetCommentsRequired() bool`

GetSunsetCommentsRequired returns the SunsetCommentsRequired field if non-nil, zero value otherwise.

### GetSunsetCommentsRequiredOk

`func (o *CampaignSummary) GetSunsetCommentsRequiredOk() (*bool, bool)`

GetSunsetCommentsRequiredOk returns a tuple with the SunsetCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunsetCommentsRequired

`func (o *CampaignSummary) SetSunsetCommentsRequired(v bool)`

SetSunsetCommentsRequired sets SunsetCommentsRequired field to given value.

### HasSunsetCommentsRequired

`func (o *CampaignSummary) HasSunsetCommentsRequired() bool`

HasSunsetCommentsRequired returns a boolean if a field has been set.

### GetMandatoryCommentRequirement

`func (o *CampaignSummary) GetMandatoryCommentRequirement() CampaignMandatoryCommentRequirement`

GetMandatoryCommentRequirement returns the MandatoryCommentRequirement field if non-nil, zero value otherwise.

### GetMandatoryCommentRequirementOk

`func (o *CampaignSummary) GetMandatoryCommentRequirementOk() (*CampaignMandatoryCommentRequirement, bool)`

GetMandatoryCommentRequirementOk returns a tuple with the MandatoryCommentRequirement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatoryCommentRequirement

`func (o *CampaignSummary) SetMandatoryCommentRequirement(v CampaignMandatoryCommentRequirement)`

SetMandatoryCommentRequirement sets MandatoryCommentRequirement field to given value.

### HasMandatoryCommentRequirement

`func (o *CampaignSummary) HasMandatoryCommentRequirement() bool`

HasMandatoryCommentRequirement returns a boolean if a field has been set.

### GetType

`func (o *CampaignSummary) GetType() CampaignType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignSummary) GetTypeOk() (*CampaignType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignSummary) SetType(v CampaignType)`

SetType sets Type field to given value.


### GetReviewer

`func (o *CampaignSummary) GetReviewer() Reviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *CampaignSummary) GetReviewerOk() (*Reviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *CampaignSummary) SetReviewer(v Reviewer)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *CampaignSummary) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### GetAlerts

`func (o *CampaignSummary) GetAlerts() []Alert`

GetAlerts returns the Alerts field if non-nil, zero value otherwise.

### GetAlertsOk

`func (o *CampaignSummary) GetAlertsOk() (*[]Alert, bool)`

GetAlertsOk returns a tuple with the Alerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlerts

`func (o *CampaignSummary) SetAlerts(v []Alert)`

SetAlerts sets Alerts field to given value.

### HasAlerts

`func (o *CampaignSummary) HasAlerts() bool`

HasAlerts returns a boolean if a field has been set.

### GetCreated

`func (o *CampaignSummary) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CampaignSummary) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CampaignSummary) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *CampaignSummary) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *CampaignSummary) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CampaignSummary) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CampaignSummary) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CampaignSummary) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetTotalCertifications

`func (o *CampaignSummary) GetTotalCertifications() int32`

GetTotalCertifications returns the TotalCertifications field if non-nil, zero value otherwise.

### GetTotalCertificationsOk

`func (o *CampaignSummary) GetTotalCertificationsOk() (*int32, bool)`

GetTotalCertificationsOk returns a tuple with the TotalCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCertifications

`func (o *CampaignSummary) SetTotalCertifications(v int32)`

SetTotalCertifications sets TotalCertifications field to given value.

### HasTotalCertifications

`func (o *CampaignSummary) HasTotalCertifications() bool`

HasTotalCertifications returns a boolean if a field has been set.

### GetCompletedCertifications

`func (o *CampaignSummary) GetCompletedCertifications() int32`

GetCompletedCertifications returns the CompletedCertifications field if non-nil, zero value otherwise.

### GetCompletedCertificationsOk

`func (o *CampaignSummary) GetCompletedCertificationsOk() (*int32, bool)`

GetCompletedCertificationsOk returns a tuple with the CompletedCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedCertifications

`func (o *CampaignSummary) SetCompletedCertifications(v int32)`

SetCompletedCertifications sets CompletedCertifications field to given value.

### HasCompletedCertifications

`func (o *CampaignSummary) HasCompletedCertifications() bool`

HasCompletedCertifications returns a boolean if a field has been set.

### GetStatus

`func (o *CampaignSummary) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CampaignSummary) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CampaignSummary) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CampaignSummary) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetGenerationType

`func (o *CampaignSummary) GetGenerationType() CampaignGenerationType`

GetGenerationType returns the GenerationType field if non-nil, zero value otherwise.

### GetGenerationTypeOk

`func (o *CampaignSummary) GetGenerationTypeOk() (*CampaignGenerationType, bool)`

GetGenerationTypeOk returns a tuple with the GenerationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerationType

`func (o *CampaignSummary) SetGenerationType(v CampaignGenerationType)`

SetGenerationType sets GenerationType field to given value.

### HasGenerationType

`func (o *CampaignSummary) HasGenerationType() bool`

HasGenerationType returns a boolean if a field has been set.


