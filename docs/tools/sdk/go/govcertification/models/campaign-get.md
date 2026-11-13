# CampaignGet

# CampaignGet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the campaign | [optional] [readonly] 
**Name** | **string** | The campaign name. | 
**Description** | **string** | The campaign description. | 
**Deadline** | Pointer to **string** | The campaign's completion deadline date. While creating campaign, If deadline is passed as empty then automatically it will be set for two weeks later from current time. | [optional] 
**DeadlineTimezone** | Pointer to **string** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] 
**DeadlineTime** | Pointer to **SailPointTime** | Calculated deadline time in UTC timezone of the campaign calculated from the deadline and the deadlineTimezone | [optional] 
**EmailNotificationEnabled** | Pointer to **bool** | Enables email notification for this campaign | [optional] [default to false]
**AutoRevokeAllowed** | Pointer to **bool** | Allows auto revoke for this campaign | [optional] [default to false]
**AutoActivate** | Pointer to **bool** | If true, the campaign is set to activate automatically after generation completes. Campaigns stored without this attribute default to false. | [optional] [default to false]
**RecommendationsEnabled** | Pointer to **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to false]
**SunsetCommentsRequired** | Pointer to **bool** | Determines if comments on sunset date changes are required. | [optional] [default to true]
**Type** | **CampaignType** |  | 
**Reviewer** | [**Reviewer**](reviewer) |  | 
**Alerts** | Pointer to [**[]Alert**](alert) | A list of errors and warnings that have accumulated. | [optional] [readonly] [default to []]
**FilterRef** | Pointer to [**CampaignFilterRef**](campaign-filter-ref) |  | [optional] 
**InlineFilter** | Pointer to [**CampaignFilterInline**](campaign-filter-inline) |  | [optional] 
**SearchBasedParams** | Pointer to [**CampaignSearchBasedParams**](campaign-search-based-params) |  | [optional] 
**RemediatorRef** | Pointer to [**CampaignRemediatorRef**](campaign-remediator-ref) |  | [optional] 
**OwnerId** | Pointer to **string** | The campaign owner is the Identity that created the campaign. | [optional] 
**Created** | Pointer to **SailPointTime** | Created time of the campaign | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Modified time of the campaign | [optional] [readonly] 
**TotalCertifications** | Pointer to **int32** | The total number of certifications in this campaign. | [optional] [readonly] 
**CompletedCertifications** | Pointer to **int32** | The number of completed certifications in this campaign. | [optional] [readonly] 
**MandatoryCommentRequirement** | Pointer to **CampaignMandatoryCommentRequirement** |  | [optional] [default to CAMPAIGNMANDATORYCOMMENTREQUIREMENT_NO_DECISIONS]
**Status** | Pointer to **string** | The campaign's current status. | [optional] [readonly] 
**LatestReports** | Pointer to [**map[string]CampaignLatestReport**](campaign-latest-report) | A map of the latest report for each report type | [optional] 
**SourceIds** | Pointer to **[]string** | A direct list of sourceIds to include in this campaign. | [optional] 
**SourcesWithOrphanEntitlements** | Pointer to [**[]CampaignOrphanEntitlementSource**](campaign-orphan-entitlement-source) | Sources that have orphan entitlement line items for this campaign, as supplied when the campaign finished staging. Each entry identifies a source by id and name. | [optional] [readonly] 

## Methods

### NewCampaignGet

`func NewCampaignGet(name string, description string, type_ CampaignType, reviewer Reviewer, ) *CampaignGet`

NewCampaignGet instantiates a new CampaignGet object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignGetWithDefaults

`func NewCampaignGetWithDefaults() *CampaignGet`

NewCampaignGetWithDefaults instantiates a new CampaignGet object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignGet) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignGet) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignGet) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CampaignGet) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *CampaignGet) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignGet) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignGet) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaignGet) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignGet) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignGet) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetDeadline

`func (o *CampaignGet) GetDeadline() string`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *CampaignGet) GetDeadlineOk() (*string, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *CampaignGet) SetDeadline(v string)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *CampaignGet) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### GetDeadlineTimezone

`func (o *CampaignGet) GetDeadlineTimezone() string`

GetDeadlineTimezone returns the DeadlineTimezone field if non-nil, zero value otherwise.

### GetDeadlineTimezoneOk

`func (o *CampaignGet) GetDeadlineTimezoneOk() (*string, bool)`

GetDeadlineTimezoneOk returns a tuple with the DeadlineTimezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadlineTimezone

`func (o *CampaignGet) SetDeadlineTimezone(v string)`

SetDeadlineTimezone sets DeadlineTimezone field to given value.

### HasDeadlineTimezone

`func (o *CampaignGet) HasDeadlineTimezone() bool`

HasDeadlineTimezone returns a boolean if a field has been set.

### GetDeadlineTime

`func (o *CampaignGet) GetDeadlineTime() SailPointTime`

GetDeadlineTime returns the DeadlineTime field if non-nil, zero value otherwise.

### GetDeadlineTimeOk

`func (o *CampaignGet) GetDeadlineTimeOk() (*SailPointTime, bool)`

GetDeadlineTimeOk returns a tuple with the DeadlineTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadlineTime

`func (o *CampaignGet) SetDeadlineTime(v SailPointTime)`

SetDeadlineTime sets DeadlineTime field to given value.

### HasDeadlineTime

`func (o *CampaignGet) HasDeadlineTime() bool`

HasDeadlineTime returns a boolean if a field has been set.

### GetEmailNotificationEnabled

`func (o *CampaignGet) GetEmailNotificationEnabled() bool`

GetEmailNotificationEnabled returns the EmailNotificationEnabled field if non-nil, zero value otherwise.

### GetEmailNotificationEnabledOk

`func (o *CampaignGet) GetEmailNotificationEnabledOk() (*bool, bool)`

GetEmailNotificationEnabledOk returns a tuple with the EmailNotificationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailNotificationEnabled

`func (o *CampaignGet) SetEmailNotificationEnabled(v bool)`

SetEmailNotificationEnabled sets EmailNotificationEnabled field to given value.

### HasEmailNotificationEnabled

`func (o *CampaignGet) HasEmailNotificationEnabled() bool`

HasEmailNotificationEnabled returns a boolean if a field has been set.

### GetAutoRevokeAllowed

`func (o *CampaignGet) GetAutoRevokeAllowed() bool`

GetAutoRevokeAllowed returns the AutoRevokeAllowed field if non-nil, zero value otherwise.

### GetAutoRevokeAllowedOk

`func (o *CampaignGet) GetAutoRevokeAllowedOk() (*bool, bool)`

GetAutoRevokeAllowedOk returns a tuple with the AutoRevokeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRevokeAllowed

`func (o *CampaignGet) SetAutoRevokeAllowed(v bool)`

SetAutoRevokeAllowed sets AutoRevokeAllowed field to given value.

### HasAutoRevokeAllowed

`func (o *CampaignGet) HasAutoRevokeAllowed() bool`

HasAutoRevokeAllowed returns a boolean if a field has been set.

### GetAutoActivate

`func (o *CampaignGet) GetAutoActivate() bool`

GetAutoActivate returns the AutoActivate field if non-nil, zero value otherwise.

### GetAutoActivateOk

`func (o *CampaignGet) GetAutoActivateOk() (*bool, bool)`

GetAutoActivateOk returns a tuple with the AutoActivate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoActivate

`func (o *CampaignGet) SetAutoActivate(v bool)`

SetAutoActivate sets AutoActivate field to given value.

### HasAutoActivate

`func (o *CampaignGet) HasAutoActivate() bool`

HasAutoActivate returns a boolean if a field has been set.

### GetRecommendationsEnabled

`func (o *CampaignGet) GetRecommendationsEnabled() bool`

GetRecommendationsEnabled returns the RecommendationsEnabled field if non-nil, zero value otherwise.

### GetRecommendationsEnabledOk

`func (o *CampaignGet) GetRecommendationsEnabledOk() (*bool, bool)`

GetRecommendationsEnabledOk returns a tuple with the RecommendationsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationsEnabled

`func (o *CampaignGet) SetRecommendationsEnabled(v bool)`

SetRecommendationsEnabled sets RecommendationsEnabled field to given value.

### HasRecommendationsEnabled

`func (o *CampaignGet) HasRecommendationsEnabled() bool`

HasRecommendationsEnabled returns a boolean if a field has been set.

### GetSunsetCommentsRequired

`func (o *CampaignGet) GetSunsetCommentsRequired() bool`

GetSunsetCommentsRequired returns the SunsetCommentsRequired field if non-nil, zero value otherwise.

### GetSunsetCommentsRequiredOk

`func (o *CampaignGet) GetSunsetCommentsRequiredOk() (*bool, bool)`

GetSunsetCommentsRequiredOk returns a tuple with the SunsetCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunsetCommentsRequired

`func (o *CampaignGet) SetSunsetCommentsRequired(v bool)`

SetSunsetCommentsRequired sets SunsetCommentsRequired field to given value.

### HasSunsetCommentsRequired

`func (o *CampaignGet) HasSunsetCommentsRequired() bool`

HasSunsetCommentsRequired returns a boolean if a field has been set.

### GetType

`func (o *CampaignGet) GetType() CampaignType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignGet) GetTypeOk() (*CampaignType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignGet) SetType(v CampaignType)`

SetType sets Type field to given value.


### GetReviewer

`func (o *CampaignGet) GetReviewer() Reviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *CampaignGet) GetReviewerOk() (*Reviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *CampaignGet) SetReviewer(v Reviewer)`

SetReviewer sets Reviewer field to given value.


### GetAlerts

`func (o *CampaignGet) GetAlerts() []Alert`

GetAlerts returns the Alerts field if non-nil, zero value otherwise.

### GetAlertsOk

`func (o *CampaignGet) GetAlertsOk() (*[]Alert, bool)`

GetAlertsOk returns a tuple with the Alerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlerts

`func (o *CampaignGet) SetAlerts(v []Alert)`

SetAlerts sets Alerts field to given value.

### HasAlerts

`func (o *CampaignGet) HasAlerts() bool`

HasAlerts returns a boolean if a field has been set.

### GetFilterRef

`func (o *CampaignGet) GetFilterRef() CampaignFilterRef`

GetFilterRef returns the FilterRef field if non-nil, zero value otherwise.

### GetFilterRefOk

`func (o *CampaignGet) GetFilterRefOk() (*CampaignFilterRef, bool)`

GetFilterRefOk returns a tuple with the FilterRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterRef

`func (o *CampaignGet) SetFilterRef(v CampaignFilterRef)`

SetFilterRef sets FilterRef field to given value.

### HasFilterRef

`func (o *CampaignGet) HasFilterRef() bool`

HasFilterRef returns a boolean if a field has been set.

### GetInlineFilter

`func (o *CampaignGet) GetInlineFilter() CampaignFilterInline`

GetInlineFilter returns the InlineFilter field if non-nil, zero value otherwise.

### GetInlineFilterOk

`func (o *CampaignGet) GetInlineFilterOk() (*CampaignFilterInline, bool)`

GetInlineFilterOk returns a tuple with the InlineFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInlineFilter

`func (o *CampaignGet) SetInlineFilter(v CampaignFilterInline)`

SetInlineFilter sets InlineFilter field to given value.

### HasInlineFilter

`func (o *CampaignGet) HasInlineFilter() bool`

HasInlineFilter returns a boolean if a field has been set.

### GetSearchBasedParams

`func (o *CampaignGet) GetSearchBasedParams() CampaignSearchBasedParams`

GetSearchBasedParams returns the SearchBasedParams field if non-nil, zero value otherwise.

### GetSearchBasedParamsOk

`func (o *CampaignGet) GetSearchBasedParamsOk() (*CampaignSearchBasedParams, bool)`

GetSearchBasedParamsOk returns a tuple with the SearchBasedParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchBasedParams

`func (o *CampaignGet) SetSearchBasedParams(v CampaignSearchBasedParams)`

SetSearchBasedParams sets SearchBasedParams field to given value.

### HasSearchBasedParams

`func (o *CampaignGet) HasSearchBasedParams() bool`

HasSearchBasedParams returns a boolean if a field has been set.

### GetRemediatorRef

`func (o *CampaignGet) GetRemediatorRef() CampaignRemediatorRef`

GetRemediatorRef returns the RemediatorRef field if non-nil, zero value otherwise.

### GetRemediatorRefOk

`func (o *CampaignGet) GetRemediatorRefOk() (*CampaignRemediatorRef, bool)`

GetRemediatorRefOk returns a tuple with the RemediatorRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemediatorRef

`func (o *CampaignGet) SetRemediatorRef(v CampaignRemediatorRef)`

SetRemediatorRef sets RemediatorRef field to given value.

### HasRemediatorRef

`func (o *CampaignGet) HasRemediatorRef() bool`

HasRemediatorRef returns a boolean if a field has been set.

### GetOwnerId

`func (o *CampaignGet) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *CampaignGet) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *CampaignGet) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *CampaignGet) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### GetCreated

`func (o *CampaignGet) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CampaignGet) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CampaignGet) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *CampaignGet) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *CampaignGet) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CampaignGet) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CampaignGet) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CampaignGet) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetTotalCertifications

`func (o *CampaignGet) GetTotalCertifications() int32`

GetTotalCertifications returns the TotalCertifications field if non-nil, zero value otherwise.

### GetTotalCertificationsOk

`func (o *CampaignGet) GetTotalCertificationsOk() (*int32, bool)`

GetTotalCertificationsOk returns a tuple with the TotalCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCertifications

`func (o *CampaignGet) SetTotalCertifications(v int32)`

SetTotalCertifications sets TotalCertifications field to given value.

### HasTotalCertifications

`func (o *CampaignGet) HasTotalCertifications() bool`

HasTotalCertifications returns a boolean if a field has been set.

### GetCompletedCertifications

`func (o *CampaignGet) GetCompletedCertifications() int32`

GetCompletedCertifications returns the CompletedCertifications field if non-nil, zero value otherwise.

### GetCompletedCertificationsOk

`func (o *CampaignGet) GetCompletedCertificationsOk() (*int32, bool)`

GetCompletedCertificationsOk returns a tuple with the CompletedCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedCertifications

`func (o *CampaignGet) SetCompletedCertifications(v int32)`

SetCompletedCertifications sets CompletedCertifications field to given value.

### HasCompletedCertifications

`func (o *CampaignGet) HasCompletedCertifications() bool`

HasCompletedCertifications returns a boolean if a field has been set.

### GetMandatoryCommentRequirement

`func (o *CampaignGet) GetMandatoryCommentRequirement() CampaignMandatoryCommentRequirement`

GetMandatoryCommentRequirement returns the MandatoryCommentRequirement field if non-nil, zero value otherwise.

### GetMandatoryCommentRequirementOk

`func (o *CampaignGet) GetMandatoryCommentRequirementOk() (*CampaignMandatoryCommentRequirement, bool)`

GetMandatoryCommentRequirementOk returns a tuple with the MandatoryCommentRequirement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatoryCommentRequirement

`func (o *CampaignGet) SetMandatoryCommentRequirement(v CampaignMandatoryCommentRequirement)`

SetMandatoryCommentRequirement sets MandatoryCommentRequirement field to given value.

### HasMandatoryCommentRequirement

`func (o *CampaignGet) HasMandatoryCommentRequirement() bool`

HasMandatoryCommentRequirement returns a boolean if a field has been set.

### GetStatus

`func (o *CampaignGet) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CampaignGet) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CampaignGet) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CampaignGet) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetLatestReports

`func (o *CampaignGet) GetLatestReports() map[string]CampaignLatestReport`

GetLatestReports returns the LatestReports field if non-nil, zero value otherwise.

### GetLatestReportsOk

`func (o *CampaignGet) GetLatestReportsOk() (*map[string]CampaignLatestReport, bool)`

GetLatestReportsOk returns a tuple with the LatestReports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLatestReports

`func (o *CampaignGet) SetLatestReports(v map[string]CampaignLatestReport)`

SetLatestReports sets LatestReports field to given value.

### HasLatestReports

`func (o *CampaignGet) HasLatestReports() bool`

HasLatestReports returns a boolean if a field has been set.

### GetSourceIds

`func (o *CampaignGet) GetSourceIds() []string`

GetSourceIds returns the SourceIds field if non-nil, zero value otherwise.

### GetSourceIdsOk

`func (o *CampaignGet) GetSourceIdsOk() (*[]string, bool)`

GetSourceIdsOk returns a tuple with the SourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIds

`func (o *CampaignGet) SetSourceIds(v []string)`

SetSourceIds sets SourceIds field to given value.

### HasSourceIds

`func (o *CampaignGet) HasSourceIds() bool`

HasSourceIds returns a boolean if a field has been set.

### GetSourcesWithOrphanEntitlements

`func (o *CampaignGet) GetSourcesWithOrphanEntitlements() []CampaignOrphanEntitlementSource`

GetSourcesWithOrphanEntitlements returns the SourcesWithOrphanEntitlements field if non-nil, zero value otherwise.

### GetSourcesWithOrphanEntitlementsOk

`func (o *CampaignGet) GetSourcesWithOrphanEntitlementsOk() (*[]CampaignOrphanEntitlementSource, bool)`

GetSourcesWithOrphanEntitlementsOk returns a tuple with the SourcesWithOrphanEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourcesWithOrphanEntitlements

`func (o *CampaignGet) SetSourcesWithOrphanEntitlements(v []CampaignOrphanEntitlementSource)`

SetSourcesWithOrphanEntitlements sets SourcesWithOrphanEntitlements field to given value.

### HasSourcesWithOrphanEntitlements

`func (o *CampaignGet) HasSourcesWithOrphanEntitlements() bool`

HasSourcesWithOrphanEntitlements returns a boolean if a field has been set.


