---
id: campaign
title: Campaign
pagination_label: Campaign
sidebar_label: Campaign
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Campaign'] 
slug: /tools/sdk/go/beta/models/campaign
tags: ['SDK', 'Software Development Kit', 'Campaign']
---

# Campaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | Id of the campaign | [optional] [readonly] 
**Name** |  **string** | The campaign name. If this object is part of a template, special formatting applies; see the &#x60;/campaign-templates/{id}/generate&#x60; endpoint documentation for details. | 
**Description** |  **string** | The campaign description. If this object is part of a template, special formatting applies; see the &#x60;/campaign-templates/{id}/generate&#x60; endpoint documentation for details. | 
**Deadline** |  Pointer to **time.Time** | The campaign&#39;s completion deadline.  This date must be in the future in order to activate the campaign.  If you try to activate a campaign with a deadline of today or in the past, you will receive a 400 error response. | [optional] 
**Type** |  **string** | The type of campaign. Could be extended in the future. | 
**EmailNotificationEnabled** |  Pointer to **bool** | Enables email notification for this campaign | [optional] [default to false]
**AutoRevokeAllowed** |  Pointer to **bool** | Allows auto revoke for this campaign | [optional] [default to false]
**RecommendationsEnabled** |  Pointer to **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to false]
**Status** |  Pointer to **string** | The campaign&#39;s current status. | [optional] [readonly] 
**CorrelatedStatus** |  Pointer to **map[string]interface{}** | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | [optional] 
**Created** |  Pointer to **time.Time** | Created time of the campaign | [optional] [readonly] 
**TotalCertifications** |  Pointer to **int32** | The total number of certifications in this campaign. | [optional] [readonly] 
**CompletedCertifications** |  Pointer to **int32** | The number of completed certifications in this campaign. | [optional] [readonly] 
**Alerts** |  Pointer to [**[]CampaignAlert**](campaign-alert) | A list of errors and warnings that have accumulated. | [optional] [readonly] 
**Modified** |  Pointer to **time.Time** | Modified time of the campaign | [optional] [readonly] 
**Filter** |  Pointer to [**FullcampaignAllOfFilter**](fullcampaign-all-of-filter) |  | [optional] 
**SunsetCommentsRequired** |  Pointer to **bool** | Determines if comments on sunset date changes are required. | [optional] [default to true]
**SourceOwnerCampaignInfo** |  Pointer to [**FullcampaignAllOfSourceOwnerCampaignInfo**](fullcampaign-all-of-source-owner-campaign-info) |  | [optional] 
**SearchCampaignInfo** |  Pointer to [**FullcampaignAllOfSearchCampaignInfo**](fullcampaign-all-of-search-campaign-info) |  | [optional] 
**RoleCompositionCampaignInfo** |  Pointer to [**FullcampaignAllOfRoleCompositionCampaignInfo**](fullcampaign-all-of-role-composition-campaign-info) |  | [optional] 
**SourcesWithOrphanEntitlements** |  Pointer to [**[]FullcampaignAllOfSourcesWithOrphanEntitlements**](fullcampaign-all-of-sources-with-orphan-entitlements) | A list of sources in the campaign that contain \\\&quot;orphan entitlements\\\&quot; (entitlements without a corresponding Managed Attribute). An empty list indicates the campaign has no orphan entitlements. Null indicates there may be unknown orphan entitlements in the campaign (the campaign was created before this feature was implemented). | [optional] [readonly] 
**MandatoryCommentRequirement** |  Pointer to **string** | Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions. | [optional] 

## Methods

### NewCampaign

`func NewCampaign(name string, description string, type_ string, ) *Campaign`

NewCampaign instantiates a new Campaign object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignWithDefaults

`func NewCampaignWithDefaults() *Campaign`

NewCampaignWithDefaults instantiates a new Campaign object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Campaign) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Campaign) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Campaign) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Campaign) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Campaign) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Campaign) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Campaign) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Campaign) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Campaign) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Campaign) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetDeadline

`func (o *Campaign) GetDeadline() time.Time`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *Campaign) GetDeadlineOk() (*time.Time, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *Campaign) SetDeadline(v time.Time)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *Campaign) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### GetType

`func (o *Campaign) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Campaign) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Campaign) SetType(v string)`

SetType sets Type field to given value.


### GetEmailNotificationEnabled

`func (o *Campaign) GetEmailNotificationEnabled() bool`

GetEmailNotificationEnabled returns the EmailNotificationEnabled field if non-nil, zero value otherwise.

### GetEmailNotificationEnabledOk

`func (o *Campaign) GetEmailNotificationEnabledOk() (*bool, bool)`

GetEmailNotificationEnabledOk returns a tuple with the EmailNotificationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailNotificationEnabled

`func (o *Campaign) SetEmailNotificationEnabled(v bool)`

SetEmailNotificationEnabled sets EmailNotificationEnabled field to given value.

### HasEmailNotificationEnabled

`func (o *Campaign) HasEmailNotificationEnabled() bool`

HasEmailNotificationEnabled returns a boolean if a field has been set.

### GetAutoRevokeAllowed

`func (o *Campaign) GetAutoRevokeAllowed() bool`

GetAutoRevokeAllowed returns the AutoRevokeAllowed field if non-nil, zero value otherwise.

### GetAutoRevokeAllowedOk

`func (o *Campaign) GetAutoRevokeAllowedOk() (*bool, bool)`

GetAutoRevokeAllowedOk returns a tuple with the AutoRevokeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRevokeAllowed

`func (o *Campaign) SetAutoRevokeAllowed(v bool)`

SetAutoRevokeAllowed sets AutoRevokeAllowed field to given value.

### HasAutoRevokeAllowed

`func (o *Campaign) HasAutoRevokeAllowed() bool`

HasAutoRevokeAllowed returns a boolean if a field has been set.

### GetRecommendationsEnabled

`func (o *Campaign) GetRecommendationsEnabled() bool`

GetRecommendationsEnabled returns the RecommendationsEnabled field if non-nil, zero value otherwise.

### GetRecommendationsEnabledOk

`func (o *Campaign) GetRecommendationsEnabledOk() (*bool, bool)`

GetRecommendationsEnabledOk returns a tuple with the RecommendationsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationsEnabled

`func (o *Campaign) SetRecommendationsEnabled(v bool)`

SetRecommendationsEnabled sets RecommendationsEnabled field to given value.

### HasRecommendationsEnabled

`func (o *Campaign) HasRecommendationsEnabled() bool`

HasRecommendationsEnabled returns a boolean if a field has been set.

### GetStatus

`func (o *Campaign) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Campaign) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Campaign) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Campaign) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCorrelatedStatus

`func (o *Campaign) GetCorrelatedStatus() map[string]interface{}`

GetCorrelatedStatus returns the CorrelatedStatus field if non-nil, zero value otherwise.

### GetCorrelatedStatusOk

`func (o *Campaign) GetCorrelatedStatusOk() (*map[string]interface{}, bool)`

GetCorrelatedStatusOk returns a tuple with the CorrelatedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedStatus

`func (o *Campaign) SetCorrelatedStatus(v map[string]interface{})`

SetCorrelatedStatus sets CorrelatedStatus field to given value.

### HasCorrelatedStatus

`func (o *Campaign) HasCorrelatedStatus() bool`

HasCorrelatedStatus returns a boolean if a field has been set.

### GetCreated

`func (o *Campaign) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Campaign) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Campaign) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Campaign) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetTotalCertifications

`func (o *Campaign) GetTotalCertifications() int32`

GetTotalCertifications returns the TotalCertifications field if non-nil, zero value otherwise.

### GetTotalCertificationsOk

`func (o *Campaign) GetTotalCertificationsOk() (*int32, bool)`

GetTotalCertificationsOk returns a tuple with the TotalCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCertifications

`func (o *Campaign) SetTotalCertifications(v int32)`

SetTotalCertifications sets TotalCertifications field to given value.

### HasTotalCertifications

`func (o *Campaign) HasTotalCertifications() bool`

HasTotalCertifications returns a boolean if a field has been set.

### GetCompletedCertifications

`func (o *Campaign) GetCompletedCertifications() int32`

GetCompletedCertifications returns the CompletedCertifications field if non-nil, zero value otherwise.

### GetCompletedCertificationsOk

`func (o *Campaign) GetCompletedCertificationsOk() (*int32, bool)`

GetCompletedCertificationsOk returns a tuple with the CompletedCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedCertifications

`func (o *Campaign) SetCompletedCertifications(v int32)`

SetCompletedCertifications sets CompletedCertifications field to given value.

### HasCompletedCertifications

`func (o *Campaign) HasCompletedCertifications() bool`

HasCompletedCertifications returns a boolean if a field has been set.

### GetAlerts

`func (o *Campaign) GetAlerts() []CampaignAlert`

GetAlerts returns the Alerts field if non-nil, zero value otherwise.

### GetAlertsOk

`func (o *Campaign) GetAlertsOk() (*[]CampaignAlert, bool)`

GetAlertsOk returns a tuple with the Alerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlerts

`func (o *Campaign) SetAlerts(v []CampaignAlert)`

SetAlerts sets Alerts field to given value.

### HasAlerts

`func (o *Campaign) HasAlerts() bool`

HasAlerts returns a boolean if a field has been set.

### GetModified

`func (o *Campaign) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Campaign) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Campaign) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Campaign) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetFilter

`func (o *Campaign) GetFilter() FullcampaignAllOfFilter`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *Campaign) GetFilterOk() (*FullcampaignAllOfFilter, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *Campaign) SetFilter(v FullcampaignAllOfFilter)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *Campaign) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetSunsetCommentsRequired

`func (o *Campaign) GetSunsetCommentsRequired() bool`

GetSunsetCommentsRequired returns the SunsetCommentsRequired field if non-nil, zero value otherwise.

### GetSunsetCommentsRequiredOk

`func (o *Campaign) GetSunsetCommentsRequiredOk() (*bool, bool)`

GetSunsetCommentsRequiredOk returns a tuple with the SunsetCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunsetCommentsRequired

`func (o *Campaign) SetSunsetCommentsRequired(v bool)`

SetSunsetCommentsRequired sets SunsetCommentsRequired field to given value.

### HasSunsetCommentsRequired

`func (o *Campaign) HasSunsetCommentsRequired() bool`

HasSunsetCommentsRequired returns a boolean if a field has been set.

### GetSourceOwnerCampaignInfo

`func (o *Campaign) GetSourceOwnerCampaignInfo() FullcampaignAllOfSourceOwnerCampaignInfo`

GetSourceOwnerCampaignInfo returns the SourceOwnerCampaignInfo field if non-nil, zero value otherwise.

### GetSourceOwnerCampaignInfoOk

`func (o *Campaign) GetSourceOwnerCampaignInfoOk() (*FullcampaignAllOfSourceOwnerCampaignInfo, bool)`

GetSourceOwnerCampaignInfoOk returns a tuple with the SourceOwnerCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOwnerCampaignInfo

`func (o *Campaign) SetSourceOwnerCampaignInfo(v FullcampaignAllOfSourceOwnerCampaignInfo)`

SetSourceOwnerCampaignInfo sets SourceOwnerCampaignInfo field to given value.

### HasSourceOwnerCampaignInfo

`func (o *Campaign) HasSourceOwnerCampaignInfo() bool`

HasSourceOwnerCampaignInfo returns a boolean if a field has been set.

### GetSearchCampaignInfo

`func (o *Campaign) GetSearchCampaignInfo() FullcampaignAllOfSearchCampaignInfo`

GetSearchCampaignInfo returns the SearchCampaignInfo field if non-nil, zero value otherwise.

### GetSearchCampaignInfoOk

`func (o *Campaign) GetSearchCampaignInfoOk() (*FullcampaignAllOfSearchCampaignInfo, bool)`

GetSearchCampaignInfoOk returns a tuple with the SearchCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchCampaignInfo

`func (o *Campaign) SetSearchCampaignInfo(v FullcampaignAllOfSearchCampaignInfo)`

SetSearchCampaignInfo sets SearchCampaignInfo field to given value.

### HasSearchCampaignInfo

`func (o *Campaign) HasSearchCampaignInfo() bool`

HasSearchCampaignInfo returns a boolean if a field has been set.

### GetRoleCompositionCampaignInfo

`func (o *Campaign) GetRoleCompositionCampaignInfo() FullcampaignAllOfRoleCompositionCampaignInfo`

GetRoleCompositionCampaignInfo returns the RoleCompositionCampaignInfo field if non-nil, zero value otherwise.

### GetRoleCompositionCampaignInfoOk

`func (o *Campaign) GetRoleCompositionCampaignInfoOk() (*FullcampaignAllOfRoleCompositionCampaignInfo, bool)`

GetRoleCompositionCampaignInfoOk returns a tuple with the RoleCompositionCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleCompositionCampaignInfo

`func (o *Campaign) SetRoleCompositionCampaignInfo(v FullcampaignAllOfRoleCompositionCampaignInfo)`

SetRoleCompositionCampaignInfo sets RoleCompositionCampaignInfo field to given value.

### HasRoleCompositionCampaignInfo

`func (o *Campaign) HasRoleCompositionCampaignInfo() bool`

HasRoleCompositionCampaignInfo returns a boolean if a field has been set.

### GetSourcesWithOrphanEntitlements

`func (o *Campaign) GetSourcesWithOrphanEntitlements() []FullcampaignAllOfSourcesWithOrphanEntitlements`

GetSourcesWithOrphanEntitlements returns the SourcesWithOrphanEntitlements field if non-nil, zero value otherwise.

### GetSourcesWithOrphanEntitlementsOk

`func (o *Campaign) GetSourcesWithOrphanEntitlementsOk() (*[]FullcampaignAllOfSourcesWithOrphanEntitlements, bool)`

GetSourcesWithOrphanEntitlementsOk returns a tuple with the SourcesWithOrphanEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourcesWithOrphanEntitlements

`func (o *Campaign) SetSourcesWithOrphanEntitlements(v []FullcampaignAllOfSourcesWithOrphanEntitlements)`

SetSourcesWithOrphanEntitlements sets SourcesWithOrphanEntitlements field to given value.

### HasSourcesWithOrphanEntitlements

`func (o *Campaign) HasSourcesWithOrphanEntitlements() bool`

HasSourcesWithOrphanEntitlements returns a boolean if a field has been set.

### GetMandatoryCommentRequirement

`func (o *Campaign) GetMandatoryCommentRequirement() string`

GetMandatoryCommentRequirement returns the MandatoryCommentRequirement field if non-nil, zero value otherwise.

### GetMandatoryCommentRequirementOk

`func (o *Campaign) GetMandatoryCommentRequirementOk() (*string, bool)`

GetMandatoryCommentRequirementOk returns a tuple with the MandatoryCommentRequirement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatoryCommentRequirement

`func (o *Campaign) SetMandatoryCommentRequirement(v string)`

SetMandatoryCommentRequirement sets MandatoryCommentRequirement field to given value.

### HasMandatoryCommentRequirement

`func (o *Campaign) HasMandatoryCommentRequirement() bool`

HasMandatoryCommentRequirement returns a boolean if a field has been set.


[[Back to top]](#) 


