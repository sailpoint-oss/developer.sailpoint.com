# CampaignCreate

# CampaignCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the campaign. | 
**Description** | **string** | Description of the campaign. | 
**Deadline** | Pointer to **string** | The campaign's completion deadline date. While creating campaign, If deadline is passed as empty then automatically it will be set for two weeks later from current time. | [optional] 
**DeadlineTimezone** | Pointer to **string** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] 
**EmailNotificationEnabled** | **bool** | Enables email notification for this campaign | [default to false]
**AutoRevokeAllowed** | **bool** | Allows auto revoke for this campaign | [default to false]
**RecommendationsEnabled** | **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [default to false]
**SunsetCommentsRequired** | **bool** | Determines if comments on sunset date changes are required. | [default to true]
**SourceIds** | Pointer to **[]string** | A direct list of sourceIds to include in this campaign. | [optional] 
**AutoActivate** | **bool** | If autoActivate is true, the campaign will be activated automatically after generation completes. In this case, a deadline must be provided; otherwise, campaign creation will fail. | [default to false]
**Type** | **CampaignType** |  | 
**Reviewer** | [**Reviewer**](reviewer) |  | 
**FilterRef** | Pointer to [**CampaignFilterIdRef**](campaign-filter-id-ref) |  | [optional] 
**InlineFilter** | Pointer to [**CampaignFilterInline**](campaign-filter-inline) |  | [optional] 
**SearchBasedParams** | Pointer to [**CampaignSearchBasedParams**](campaign-search-based-params) |  | [optional] 
**RemediatorRef** | Pointer to [**CampaignRemediatorRef**](campaign-remediator-ref) |  | [optional] 
**MandatoryCommentRequirement** | Pointer to **CampaignMandatoryCommentRequirement** |  | [optional] [default to CAMPAIGNMANDATORYCOMMENTREQUIREMENT_NO_DECISIONS]

## Methods

### NewCampaignCreate

`func NewCampaignCreate(name string, description string, emailNotificationEnabled bool, autoRevokeAllowed bool, recommendationsEnabled bool, sunsetCommentsRequired bool, autoActivate bool, type_ CampaignType, reviewer Reviewer, ) *CampaignCreate`

NewCampaignCreate instantiates a new CampaignCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignCreateWithDefaults

`func NewCampaignCreateWithDefaults() *CampaignCreate`

NewCampaignCreateWithDefaults instantiates a new CampaignCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CampaignCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignCreate) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaignCreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignCreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignCreate) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetDeadline

`func (o *CampaignCreate) GetDeadline() string`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *CampaignCreate) GetDeadlineOk() (*string, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *CampaignCreate) SetDeadline(v string)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *CampaignCreate) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### GetDeadlineTimezone

`func (o *CampaignCreate) GetDeadlineTimezone() string`

GetDeadlineTimezone returns the DeadlineTimezone field if non-nil, zero value otherwise.

### GetDeadlineTimezoneOk

`func (o *CampaignCreate) GetDeadlineTimezoneOk() (*string, bool)`

GetDeadlineTimezoneOk returns a tuple with the DeadlineTimezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadlineTimezone

`func (o *CampaignCreate) SetDeadlineTimezone(v string)`

SetDeadlineTimezone sets DeadlineTimezone field to given value.

### HasDeadlineTimezone

`func (o *CampaignCreate) HasDeadlineTimezone() bool`

HasDeadlineTimezone returns a boolean if a field has been set.

### GetEmailNotificationEnabled

`func (o *CampaignCreate) GetEmailNotificationEnabled() bool`

GetEmailNotificationEnabled returns the EmailNotificationEnabled field if non-nil, zero value otherwise.

### GetEmailNotificationEnabledOk

`func (o *CampaignCreate) GetEmailNotificationEnabledOk() (*bool, bool)`

GetEmailNotificationEnabledOk returns a tuple with the EmailNotificationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailNotificationEnabled

`func (o *CampaignCreate) SetEmailNotificationEnabled(v bool)`

SetEmailNotificationEnabled sets EmailNotificationEnabled field to given value.


### GetAutoRevokeAllowed

`func (o *CampaignCreate) GetAutoRevokeAllowed() bool`

GetAutoRevokeAllowed returns the AutoRevokeAllowed field if non-nil, zero value otherwise.

### GetAutoRevokeAllowedOk

`func (o *CampaignCreate) GetAutoRevokeAllowedOk() (*bool, bool)`

GetAutoRevokeAllowedOk returns a tuple with the AutoRevokeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRevokeAllowed

`func (o *CampaignCreate) SetAutoRevokeAllowed(v bool)`

SetAutoRevokeAllowed sets AutoRevokeAllowed field to given value.


### GetRecommendationsEnabled

`func (o *CampaignCreate) GetRecommendationsEnabled() bool`

GetRecommendationsEnabled returns the RecommendationsEnabled field if non-nil, zero value otherwise.

### GetRecommendationsEnabledOk

`func (o *CampaignCreate) GetRecommendationsEnabledOk() (*bool, bool)`

GetRecommendationsEnabledOk returns a tuple with the RecommendationsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationsEnabled

`func (o *CampaignCreate) SetRecommendationsEnabled(v bool)`

SetRecommendationsEnabled sets RecommendationsEnabled field to given value.


### GetSunsetCommentsRequired

`func (o *CampaignCreate) GetSunsetCommentsRequired() bool`

GetSunsetCommentsRequired returns the SunsetCommentsRequired field if non-nil, zero value otherwise.

### GetSunsetCommentsRequiredOk

`func (o *CampaignCreate) GetSunsetCommentsRequiredOk() (*bool, bool)`

GetSunsetCommentsRequiredOk returns a tuple with the SunsetCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunsetCommentsRequired

`func (o *CampaignCreate) SetSunsetCommentsRequired(v bool)`

SetSunsetCommentsRequired sets SunsetCommentsRequired field to given value.


### GetSourceIds

`func (o *CampaignCreate) GetSourceIds() []string`

GetSourceIds returns the SourceIds field if non-nil, zero value otherwise.

### GetSourceIdsOk

`func (o *CampaignCreate) GetSourceIdsOk() (*[]string, bool)`

GetSourceIdsOk returns a tuple with the SourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIds

`func (o *CampaignCreate) SetSourceIds(v []string)`

SetSourceIds sets SourceIds field to given value.

### HasSourceIds

`func (o *CampaignCreate) HasSourceIds() bool`

HasSourceIds returns a boolean if a field has been set.

### GetAutoActivate

`func (o *CampaignCreate) GetAutoActivate() bool`

GetAutoActivate returns the AutoActivate field if non-nil, zero value otherwise.

### GetAutoActivateOk

`func (o *CampaignCreate) GetAutoActivateOk() (*bool, bool)`

GetAutoActivateOk returns a tuple with the AutoActivate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoActivate

`func (o *CampaignCreate) SetAutoActivate(v bool)`

SetAutoActivate sets AutoActivate field to given value.


### GetType

`func (o *CampaignCreate) GetType() CampaignType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignCreate) GetTypeOk() (*CampaignType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignCreate) SetType(v CampaignType)`

SetType sets Type field to given value.


### GetReviewer

`func (o *CampaignCreate) GetReviewer() Reviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *CampaignCreate) GetReviewerOk() (*Reviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *CampaignCreate) SetReviewer(v Reviewer)`

SetReviewer sets Reviewer field to given value.


### GetFilterRef

`func (o *CampaignCreate) GetFilterRef() CampaignFilterIdRef`

GetFilterRef returns the FilterRef field if non-nil, zero value otherwise.

### GetFilterRefOk

`func (o *CampaignCreate) GetFilterRefOk() (*CampaignFilterIdRef, bool)`

GetFilterRefOk returns a tuple with the FilterRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterRef

`func (o *CampaignCreate) SetFilterRef(v CampaignFilterIdRef)`

SetFilterRef sets FilterRef field to given value.

### HasFilterRef

`func (o *CampaignCreate) HasFilterRef() bool`

HasFilterRef returns a boolean if a field has been set.

### GetInlineFilter

`func (o *CampaignCreate) GetInlineFilter() CampaignFilterInline`

GetInlineFilter returns the InlineFilter field if non-nil, zero value otherwise.

### GetInlineFilterOk

`func (o *CampaignCreate) GetInlineFilterOk() (*CampaignFilterInline, bool)`

GetInlineFilterOk returns a tuple with the InlineFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInlineFilter

`func (o *CampaignCreate) SetInlineFilter(v CampaignFilterInline)`

SetInlineFilter sets InlineFilter field to given value.

### HasInlineFilter

`func (o *CampaignCreate) HasInlineFilter() bool`

HasInlineFilter returns a boolean if a field has been set.

### GetSearchBasedParams

`func (o *CampaignCreate) GetSearchBasedParams() CampaignSearchBasedParams`

GetSearchBasedParams returns the SearchBasedParams field if non-nil, zero value otherwise.

### GetSearchBasedParamsOk

`func (o *CampaignCreate) GetSearchBasedParamsOk() (*CampaignSearchBasedParams, bool)`

GetSearchBasedParamsOk returns a tuple with the SearchBasedParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchBasedParams

`func (o *CampaignCreate) SetSearchBasedParams(v CampaignSearchBasedParams)`

SetSearchBasedParams sets SearchBasedParams field to given value.

### HasSearchBasedParams

`func (o *CampaignCreate) HasSearchBasedParams() bool`

HasSearchBasedParams returns a boolean if a field has been set.

### GetRemediatorRef

`func (o *CampaignCreate) GetRemediatorRef() CampaignRemediatorRef`

GetRemediatorRef returns the RemediatorRef field if non-nil, zero value otherwise.

### GetRemediatorRefOk

`func (o *CampaignCreate) GetRemediatorRefOk() (*CampaignRemediatorRef, bool)`

GetRemediatorRefOk returns a tuple with the RemediatorRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemediatorRef

`func (o *CampaignCreate) SetRemediatorRef(v CampaignRemediatorRef)`

SetRemediatorRef sets RemediatorRef field to given value.

### HasRemediatorRef

`func (o *CampaignCreate) HasRemediatorRef() bool`

HasRemediatorRef returns a boolean if a field has been set.

### GetMandatoryCommentRequirement

`func (o *CampaignCreate) GetMandatoryCommentRequirement() CampaignMandatoryCommentRequirement`

GetMandatoryCommentRequirement returns the MandatoryCommentRequirement field if non-nil, zero value otherwise.

### GetMandatoryCommentRequirementOk

`func (o *CampaignCreate) GetMandatoryCommentRequirementOk() (*CampaignMandatoryCommentRequirement, bool)`

GetMandatoryCommentRequirementOk returns a tuple with the MandatoryCommentRequirement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatoryCommentRequirement

`func (o *CampaignCreate) SetMandatoryCommentRequirement(v CampaignMandatoryCommentRequirement)`

SetMandatoryCommentRequirement sets MandatoryCommentRequirement field to given value.

### HasMandatoryCommentRequirement

`func (o *CampaignCreate) HasMandatoryCommentRequirement() bool`

HasMandatoryCommentRequirement returns a boolean if a field has been set.


