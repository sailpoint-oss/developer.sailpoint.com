---
id: get-active-campaigns200-response-inner
title: GetActiveCampaigns200ResponseInner
pagination_label: GetActiveCampaigns200ResponseInner
sidebar_label: GetActiveCampaigns200ResponseInner
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'GetActiveCampaigns200ResponseInner'] 
slug: /tools/sdk/go/v3/models/get-active-campaigns200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetActiveCampaigns200ResponseInner']
---

# GetActiveCampaigns200ResponseInner

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
**Filter** |  Pointer to [**CampaignAllOfFilter**](campaign-all-of-filter) |  | [optional] 
**SunsetCommentsRequired** |  Pointer to **bool** | Determines if comments on sunset date changes are required. | [optional] [default to true]
**SourceOwnerCampaignInfo** |  Pointer to [**CampaignAllOfSourceOwnerCampaignInfo**](campaign-all-of-source-owner-campaign-info) |  | [optional] 
**SearchCampaignInfo** |  Pointer to [**CampaignAllOfSearchCampaignInfo**](campaign-all-of-search-campaign-info) |  | [optional] 
**RoleCompositionCampaignInfo** |  Pointer to [**CampaignAllOfRoleCompositionCampaignInfo**](campaign-all-of-role-composition-campaign-info) |  | [optional] 
**SourcesWithOrphanEntitlements** |  Pointer to [**[]CampaignAllOfSourcesWithOrphanEntitlements**](campaign-all-of-sources-with-orphan-entitlements) | A list of sources in the campaign that contain \\\&quot;orphan entitlements\\\&quot; (entitlements without a corresponding Managed Attribute). An empty list indicates the campaign has no orphan entitlements. Null indicates there may be unknown orphan entitlements in the campaign (the campaign was created before this feature was implemented). | [optional] [readonly] 
**MandatoryCommentRequirement** |  Pointer to **string** | Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions. | [optional] 

## Methods

### NewGetActiveCampaigns200ResponseInner

`func NewGetActiveCampaigns200ResponseInner(name string, description string, type_ string, ) *GetActiveCampaigns200ResponseInner`

NewGetActiveCampaigns200ResponseInner instantiates a new GetActiveCampaigns200ResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetActiveCampaigns200ResponseInnerWithDefaults

`func NewGetActiveCampaigns200ResponseInnerWithDefaults() *GetActiveCampaigns200ResponseInner`

NewGetActiveCampaigns200ResponseInnerWithDefaults instantiates a new GetActiveCampaigns200ResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetActiveCampaigns200ResponseInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetActiveCampaigns200ResponseInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetActiveCampaigns200ResponseInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GetActiveCampaigns200ResponseInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *GetActiveCampaigns200ResponseInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetActiveCampaigns200ResponseInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetActiveCampaigns200ResponseInner) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *GetActiveCampaigns200ResponseInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GetActiveCampaigns200ResponseInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GetActiveCampaigns200ResponseInner) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetDeadline

`func (o *GetActiveCampaigns200ResponseInner) GetDeadline() time.Time`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *GetActiveCampaigns200ResponseInner) GetDeadlineOk() (*time.Time, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *GetActiveCampaigns200ResponseInner) SetDeadline(v time.Time)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *GetActiveCampaigns200ResponseInner) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### GetType

`func (o *GetActiveCampaigns200ResponseInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *GetActiveCampaigns200ResponseInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *GetActiveCampaigns200ResponseInner) SetType(v string)`

SetType sets Type field to given value.


### GetEmailNotificationEnabled

`func (o *GetActiveCampaigns200ResponseInner) GetEmailNotificationEnabled() bool`

GetEmailNotificationEnabled returns the EmailNotificationEnabled field if non-nil, zero value otherwise.

### GetEmailNotificationEnabledOk

`func (o *GetActiveCampaigns200ResponseInner) GetEmailNotificationEnabledOk() (*bool, bool)`

GetEmailNotificationEnabledOk returns a tuple with the EmailNotificationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailNotificationEnabled

`func (o *GetActiveCampaigns200ResponseInner) SetEmailNotificationEnabled(v bool)`

SetEmailNotificationEnabled sets EmailNotificationEnabled field to given value.

### HasEmailNotificationEnabled

`func (o *GetActiveCampaigns200ResponseInner) HasEmailNotificationEnabled() bool`

HasEmailNotificationEnabled returns a boolean if a field has been set.

### GetAutoRevokeAllowed

`func (o *GetActiveCampaigns200ResponseInner) GetAutoRevokeAllowed() bool`

GetAutoRevokeAllowed returns the AutoRevokeAllowed field if non-nil, zero value otherwise.

### GetAutoRevokeAllowedOk

`func (o *GetActiveCampaigns200ResponseInner) GetAutoRevokeAllowedOk() (*bool, bool)`

GetAutoRevokeAllowedOk returns a tuple with the AutoRevokeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRevokeAllowed

`func (o *GetActiveCampaigns200ResponseInner) SetAutoRevokeAllowed(v bool)`

SetAutoRevokeAllowed sets AutoRevokeAllowed field to given value.

### HasAutoRevokeAllowed

`func (o *GetActiveCampaigns200ResponseInner) HasAutoRevokeAllowed() bool`

HasAutoRevokeAllowed returns a boolean if a field has been set.

### GetRecommendationsEnabled

`func (o *GetActiveCampaigns200ResponseInner) GetRecommendationsEnabled() bool`

GetRecommendationsEnabled returns the RecommendationsEnabled field if non-nil, zero value otherwise.

### GetRecommendationsEnabledOk

`func (o *GetActiveCampaigns200ResponseInner) GetRecommendationsEnabledOk() (*bool, bool)`

GetRecommendationsEnabledOk returns a tuple with the RecommendationsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationsEnabled

`func (o *GetActiveCampaigns200ResponseInner) SetRecommendationsEnabled(v bool)`

SetRecommendationsEnabled sets RecommendationsEnabled field to given value.

### HasRecommendationsEnabled

`func (o *GetActiveCampaigns200ResponseInner) HasRecommendationsEnabled() bool`

HasRecommendationsEnabled returns a boolean if a field has been set.

### GetStatus

`func (o *GetActiveCampaigns200ResponseInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetActiveCampaigns200ResponseInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetActiveCampaigns200ResponseInner) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetActiveCampaigns200ResponseInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCorrelatedStatus

`func (o *GetActiveCampaigns200ResponseInner) GetCorrelatedStatus() map[string]interface{}`

GetCorrelatedStatus returns the CorrelatedStatus field if non-nil, zero value otherwise.

### GetCorrelatedStatusOk

`func (o *GetActiveCampaigns200ResponseInner) GetCorrelatedStatusOk() (*map[string]interface{}, bool)`

GetCorrelatedStatusOk returns a tuple with the CorrelatedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedStatus

`func (o *GetActiveCampaigns200ResponseInner) SetCorrelatedStatus(v map[string]interface{})`

SetCorrelatedStatus sets CorrelatedStatus field to given value.

### HasCorrelatedStatus

`func (o *GetActiveCampaigns200ResponseInner) HasCorrelatedStatus() bool`

HasCorrelatedStatus returns a boolean if a field has been set.

### GetCreated

`func (o *GetActiveCampaigns200ResponseInner) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *GetActiveCampaigns200ResponseInner) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *GetActiveCampaigns200ResponseInner) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *GetActiveCampaigns200ResponseInner) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetTotalCertifications

`func (o *GetActiveCampaigns200ResponseInner) GetTotalCertifications() int32`

GetTotalCertifications returns the TotalCertifications field if non-nil, zero value otherwise.

### GetTotalCertificationsOk

`func (o *GetActiveCampaigns200ResponseInner) GetTotalCertificationsOk() (*int32, bool)`

GetTotalCertificationsOk returns a tuple with the TotalCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCertifications

`func (o *GetActiveCampaigns200ResponseInner) SetTotalCertifications(v int32)`

SetTotalCertifications sets TotalCertifications field to given value.

### HasTotalCertifications

`func (o *GetActiveCampaigns200ResponseInner) HasTotalCertifications() bool`

HasTotalCertifications returns a boolean if a field has been set.

### GetCompletedCertifications

`func (o *GetActiveCampaigns200ResponseInner) GetCompletedCertifications() int32`

GetCompletedCertifications returns the CompletedCertifications field if non-nil, zero value otherwise.

### GetCompletedCertificationsOk

`func (o *GetActiveCampaigns200ResponseInner) GetCompletedCertificationsOk() (*int32, bool)`

GetCompletedCertificationsOk returns a tuple with the CompletedCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedCertifications

`func (o *GetActiveCampaigns200ResponseInner) SetCompletedCertifications(v int32)`

SetCompletedCertifications sets CompletedCertifications field to given value.

### HasCompletedCertifications

`func (o *GetActiveCampaigns200ResponseInner) HasCompletedCertifications() bool`

HasCompletedCertifications returns a boolean if a field has been set.

### GetAlerts

`func (o *GetActiveCampaigns200ResponseInner) GetAlerts() []CampaignAlert`

GetAlerts returns the Alerts field if non-nil, zero value otherwise.

### GetAlertsOk

`func (o *GetActiveCampaigns200ResponseInner) GetAlertsOk() (*[]CampaignAlert, bool)`

GetAlertsOk returns a tuple with the Alerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlerts

`func (o *GetActiveCampaigns200ResponseInner) SetAlerts(v []CampaignAlert)`

SetAlerts sets Alerts field to given value.

### HasAlerts

`func (o *GetActiveCampaigns200ResponseInner) HasAlerts() bool`

HasAlerts returns a boolean if a field has been set.

### GetModified

`func (o *GetActiveCampaigns200ResponseInner) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *GetActiveCampaigns200ResponseInner) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *GetActiveCampaigns200ResponseInner) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *GetActiveCampaigns200ResponseInner) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetFilter

`func (o *GetActiveCampaigns200ResponseInner) GetFilter() CampaignAllOfFilter`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *GetActiveCampaigns200ResponseInner) GetFilterOk() (*CampaignAllOfFilter, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *GetActiveCampaigns200ResponseInner) SetFilter(v CampaignAllOfFilter)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *GetActiveCampaigns200ResponseInner) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetSunsetCommentsRequired

`func (o *GetActiveCampaigns200ResponseInner) GetSunsetCommentsRequired() bool`

GetSunsetCommentsRequired returns the SunsetCommentsRequired field if non-nil, zero value otherwise.

### GetSunsetCommentsRequiredOk

`func (o *GetActiveCampaigns200ResponseInner) GetSunsetCommentsRequiredOk() (*bool, bool)`

GetSunsetCommentsRequiredOk returns a tuple with the SunsetCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunsetCommentsRequired

`func (o *GetActiveCampaigns200ResponseInner) SetSunsetCommentsRequired(v bool)`

SetSunsetCommentsRequired sets SunsetCommentsRequired field to given value.

### HasSunsetCommentsRequired

`func (o *GetActiveCampaigns200ResponseInner) HasSunsetCommentsRequired() bool`

HasSunsetCommentsRequired returns a boolean if a field has been set.

### GetSourceOwnerCampaignInfo

`func (o *GetActiveCampaigns200ResponseInner) GetSourceOwnerCampaignInfo() CampaignAllOfSourceOwnerCampaignInfo`

GetSourceOwnerCampaignInfo returns the SourceOwnerCampaignInfo field if non-nil, zero value otherwise.

### GetSourceOwnerCampaignInfoOk

`func (o *GetActiveCampaigns200ResponseInner) GetSourceOwnerCampaignInfoOk() (*CampaignAllOfSourceOwnerCampaignInfo, bool)`

GetSourceOwnerCampaignInfoOk returns a tuple with the SourceOwnerCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOwnerCampaignInfo

`func (o *GetActiveCampaigns200ResponseInner) SetSourceOwnerCampaignInfo(v CampaignAllOfSourceOwnerCampaignInfo)`

SetSourceOwnerCampaignInfo sets SourceOwnerCampaignInfo field to given value.

### HasSourceOwnerCampaignInfo

`func (o *GetActiveCampaigns200ResponseInner) HasSourceOwnerCampaignInfo() bool`

HasSourceOwnerCampaignInfo returns a boolean if a field has been set.

### GetSearchCampaignInfo

`func (o *GetActiveCampaigns200ResponseInner) GetSearchCampaignInfo() CampaignAllOfSearchCampaignInfo`

GetSearchCampaignInfo returns the SearchCampaignInfo field if non-nil, zero value otherwise.

### GetSearchCampaignInfoOk

`func (o *GetActiveCampaigns200ResponseInner) GetSearchCampaignInfoOk() (*CampaignAllOfSearchCampaignInfo, bool)`

GetSearchCampaignInfoOk returns a tuple with the SearchCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchCampaignInfo

`func (o *GetActiveCampaigns200ResponseInner) SetSearchCampaignInfo(v CampaignAllOfSearchCampaignInfo)`

SetSearchCampaignInfo sets SearchCampaignInfo field to given value.

### HasSearchCampaignInfo

`func (o *GetActiveCampaigns200ResponseInner) HasSearchCampaignInfo() bool`

HasSearchCampaignInfo returns a boolean if a field has been set.

### GetRoleCompositionCampaignInfo

`func (o *GetActiveCampaigns200ResponseInner) GetRoleCompositionCampaignInfo() CampaignAllOfRoleCompositionCampaignInfo`

GetRoleCompositionCampaignInfo returns the RoleCompositionCampaignInfo field if non-nil, zero value otherwise.

### GetRoleCompositionCampaignInfoOk

`func (o *GetActiveCampaigns200ResponseInner) GetRoleCompositionCampaignInfoOk() (*CampaignAllOfRoleCompositionCampaignInfo, bool)`

GetRoleCompositionCampaignInfoOk returns a tuple with the RoleCompositionCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleCompositionCampaignInfo

`func (o *GetActiveCampaigns200ResponseInner) SetRoleCompositionCampaignInfo(v CampaignAllOfRoleCompositionCampaignInfo)`

SetRoleCompositionCampaignInfo sets RoleCompositionCampaignInfo field to given value.

### HasRoleCompositionCampaignInfo

`func (o *GetActiveCampaigns200ResponseInner) HasRoleCompositionCampaignInfo() bool`

HasRoleCompositionCampaignInfo returns a boolean if a field has been set.

### GetSourcesWithOrphanEntitlements

`func (o *GetActiveCampaigns200ResponseInner) GetSourcesWithOrphanEntitlements() []CampaignAllOfSourcesWithOrphanEntitlements`

GetSourcesWithOrphanEntitlements returns the SourcesWithOrphanEntitlements field if non-nil, zero value otherwise.

### GetSourcesWithOrphanEntitlementsOk

`func (o *GetActiveCampaigns200ResponseInner) GetSourcesWithOrphanEntitlementsOk() (*[]CampaignAllOfSourcesWithOrphanEntitlements, bool)`

GetSourcesWithOrphanEntitlementsOk returns a tuple with the SourcesWithOrphanEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourcesWithOrphanEntitlements

`func (o *GetActiveCampaigns200ResponseInner) SetSourcesWithOrphanEntitlements(v []CampaignAllOfSourcesWithOrphanEntitlements)`

SetSourcesWithOrphanEntitlements sets SourcesWithOrphanEntitlements field to given value.

### HasSourcesWithOrphanEntitlements

`func (o *GetActiveCampaigns200ResponseInner) HasSourcesWithOrphanEntitlements() bool`

HasSourcesWithOrphanEntitlements returns a boolean if a field has been set.

### GetMandatoryCommentRequirement

`func (o *GetActiveCampaigns200ResponseInner) GetMandatoryCommentRequirement() string`

GetMandatoryCommentRequirement returns the MandatoryCommentRequirement field if non-nil, zero value otherwise.

### GetMandatoryCommentRequirementOk

`func (o *GetActiveCampaigns200ResponseInner) GetMandatoryCommentRequirementOk() (*string, bool)`

GetMandatoryCommentRequirementOk returns a tuple with the MandatoryCommentRequirement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatoryCommentRequirement

`func (o *GetActiveCampaigns200ResponseInner) SetMandatoryCommentRequirement(v string)`

SetMandatoryCommentRequirement sets MandatoryCommentRequirement field to given value.

### HasMandatoryCommentRequirement

`func (o *GetActiveCampaigns200ResponseInner) HasMandatoryCommentRequirement() bool`

HasMandatoryCommentRequirement returns a boolean if a field has been set.


[[Back to top]](#) 


