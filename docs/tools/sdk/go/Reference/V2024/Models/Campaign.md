---
id: v2024-campaign
title: Campaign
pagination_label: Campaign
sidebar_label: Campaign
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Campaign', 'V2024Campaign'] 
slug: /tools/sdk/go/v2024/models/campaign
tags: ['SDK', 'Software Development Kit', 'Campaign', 'V2024Campaign']
---

# Campaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | Id of the campaign | [optional] [readonly] 
**Name** | **string** | The campaign name. If this object is part of a template, special formatting applies; see the &#x60;/campaign-templates/{id}/generate&#x60; endpoint documentation for details.  | 
**Description** | **NullableString** | The campaign description. If this object is part of a template, special formatting applies; see the &#x60;/campaign-templates/{id}/generate&#x60; endpoint documentation for details.  | 
**Deadline** | Pointer to **NullableTime** | The campaign&#39;s completion deadline.  This date must be in the future in order to activate the campaign.  If you try to activate a campaign with a deadline of today or in the past, you will receive a 400 error response. | [optional] 
**Type** | **string** | The type of campaign. Could be extended in the future. | 
**EmailNotificationEnabled** | Pointer to **bool** | Enables email notification for this campaign | [optional] [default to false]
**AutoRevokeAllowed** | Pointer to **bool** | Allows auto revoke for this campaign | [optional] [default to false]
**RecommendationsEnabled** | Pointer to **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to false]
**Status** | Pointer to **NullableString** | The campaign&#39;s current status. | [optional] [readonly] 
**CorrelatedStatus** | Pointer to **string** | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | [optional] 
**Created** | Pointer to **NullableTime** | Created time of the campaign | [optional] [readonly] 
**TotalCertifications** | Pointer to **NullableInt32** | The total number of certifications in this campaign. | [optional] [readonly] 
**CompletedCertifications** | Pointer to **NullableInt32** | The number of completed certifications in this campaign. | [optional] [readonly] 
**Alerts** | Pointer to [**[]CampaignAlert**](campaign-alert) | A list of errors and warnings that have accumulated. | [optional] [readonly] 
**Modified** | Pointer to **NullableTime** | Modified time of the campaign | [optional] [readonly] 
**Filter** | Pointer to [**NullableCampaignAllOfFilter**](campaign-all-of-filter) |  | [optional] 
**SunsetCommentsRequired** | Pointer to **bool** | Determines if comments on sunset date changes are required. | [optional] [default to true]
**SourceOwnerCampaignInfo** | Pointer to [**NullableCampaignAllOfSourceOwnerCampaignInfo**](campaign-all-of-source-owner-campaign-info) |  | [optional] 
**SearchCampaignInfo** | Pointer to [**NullableCampaignAllOfSearchCampaignInfo**](campaign-all-of-search-campaign-info) |  | [optional] 
**RoleCompositionCampaignInfo** | Pointer to [**NullableCampaignAllOfRoleCompositionCampaignInfo**](campaign-all-of-role-composition-campaign-info) |  | [optional] 
**MachineAccountCampaignInfo** | Pointer to [**NullableCampaignAllOfMachineAccountCampaignInfo**](campaign-all-of-machine-account-campaign-info) |  | [optional] 
**SourcesWithOrphanEntitlements** | Pointer to [**[]CampaignAllOfSourcesWithOrphanEntitlements**](campaign-all-of-sources-with-orphan-entitlements) | A list of sources in the campaign that contain \\\&quot;orphan entitlements\\\&quot; (entitlements without a corresponding Managed Attribute). An empty list indicates the campaign has no orphan entitlements. Null indicates there may be unknown orphan entitlements in the campaign (the campaign was created before this feature was implemented). | [optional] [readonly] 
**MandatoryCommentRequirement** | Pointer to **string** | Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions. | [optional] 

## Methods

### NewCampaign

`func NewCampaign(name string, description NullableString, type_ string, ) *Campaign`

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

### SetIdNil

`func (o *Campaign) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *Campaign) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
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


### SetDescriptionNil

`func (o *Campaign) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Campaign) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
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

### SetDeadlineNil

`func (o *Campaign) SetDeadlineNil(b bool)`

 SetDeadlineNil sets the value for Deadline to be an explicit nil

### UnsetDeadline
`func (o *Campaign) UnsetDeadline()`

UnsetDeadline ensures that no value is present for Deadline, not even an explicit nil
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

### SetStatusNil

`func (o *Campaign) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *Campaign) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetCorrelatedStatus

`func (o *Campaign) GetCorrelatedStatus() string`

GetCorrelatedStatus returns the CorrelatedStatus field if non-nil, zero value otherwise.

### GetCorrelatedStatusOk

`func (o *Campaign) GetCorrelatedStatusOk() (*string, bool)`

GetCorrelatedStatusOk returns a tuple with the CorrelatedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedStatus

`func (o *Campaign) SetCorrelatedStatus(v string)`

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

### SetCreatedNil

`func (o *Campaign) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *Campaign) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
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

### SetTotalCertificationsNil

`func (o *Campaign) SetTotalCertificationsNil(b bool)`

 SetTotalCertificationsNil sets the value for TotalCertifications to be an explicit nil

### UnsetTotalCertifications
`func (o *Campaign) UnsetTotalCertifications()`

UnsetTotalCertifications ensures that no value is present for TotalCertifications, not even an explicit nil
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

### SetCompletedCertificationsNil

`func (o *Campaign) SetCompletedCertificationsNil(b bool)`

 SetCompletedCertificationsNil sets the value for CompletedCertifications to be an explicit nil

### UnsetCompletedCertifications
`func (o *Campaign) UnsetCompletedCertifications()`

UnsetCompletedCertifications ensures that no value is present for CompletedCertifications, not even an explicit nil
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

### SetAlertsNil

`func (o *Campaign) SetAlertsNil(b bool)`

 SetAlertsNil sets the value for Alerts to be an explicit nil

### UnsetAlerts
`func (o *Campaign) UnsetAlerts()`

UnsetAlerts ensures that no value is present for Alerts, not even an explicit nil
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

### SetModifiedNil

`func (o *Campaign) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Campaign) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetFilter

`func (o *Campaign) GetFilter() CampaignAllOfFilter`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *Campaign) GetFilterOk() (*CampaignAllOfFilter, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *Campaign) SetFilter(v CampaignAllOfFilter)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *Campaign) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### SetFilterNil

`func (o *Campaign) SetFilterNil(b bool)`

 SetFilterNil sets the value for Filter to be an explicit nil

### UnsetFilter
`func (o *Campaign) UnsetFilter()`

UnsetFilter ensures that no value is present for Filter, not even an explicit nil
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

`func (o *Campaign) GetSourceOwnerCampaignInfo() CampaignAllOfSourceOwnerCampaignInfo`

GetSourceOwnerCampaignInfo returns the SourceOwnerCampaignInfo field if non-nil, zero value otherwise.

### GetSourceOwnerCampaignInfoOk

`func (o *Campaign) GetSourceOwnerCampaignInfoOk() (*CampaignAllOfSourceOwnerCampaignInfo, bool)`

GetSourceOwnerCampaignInfoOk returns a tuple with the SourceOwnerCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOwnerCampaignInfo

`func (o *Campaign) SetSourceOwnerCampaignInfo(v CampaignAllOfSourceOwnerCampaignInfo)`

SetSourceOwnerCampaignInfo sets SourceOwnerCampaignInfo field to given value.

### HasSourceOwnerCampaignInfo

`func (o *Campaign) HasSourceOwnerCampaignInfo() bool`

HasSourceOwnerCampaignInfo returns a boolean if a field has been set.

### SetSourceOwnerCampaignInfoNil

`func (o *Campaign) SetSourceOwnerCampaignInfoNil(b bool)`

 SetSourceOwnerCampaignInfoNil sets the value for SourceOwnerCampaignInfo to be an explicit nil

### UnsetSourceOwnerCampaignInfo
`func (o *Campaign) UnsetSourceOwnerCampaignInfo()`

UnsetSourceOwnerCampaignInfo ensures that no value is present for SourceOwnerCampaignInfo, not even an explicit nil
### GetSearchCampaignInfo

`func (o *Campaign) GetSearchCampaignInfo() CampaignAllOfSearchCampaignInfo`

GetSearchCampaignInfo returns the SearchCampaignInfo field if non-nil, zero value otherwise.

### GetSearchCampaignInfoOk

`func (o *Campaign) GetSearchCampaignInfoOk() (*CampaignAllOfSearchCampaignInfo, bool)`

GetSearchCampaignInfoOk returns a tuple with the SearchCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchCampaignInfo

`func (o *Campaign) SetSearchCampaignInfo(v CampaignAllOfSearchCampaignInfo)`

SetSearchCampaignInfo sets SearchCampaignInfo field to given value.

### HasSearchCampaignInfo

`func (o *Campaign) HasSearchCampaignInfo() bool`

HasSearchCampaignInfo returns a boolean if a field has been set.

### SetSearchCampaignInfoNil

`func (o *Campaign) SetSearchCampaignInfoNil(b bool)`

 SetSearchCampaignInfoNil sets the value for SearchCampaignInfo to be an explicit nil

### UnsetSearchCampaignInfo
`func (o *Campaign) UnsetSearchCampaignInfo()`

UnsetSearchCampaignInfo ensures that no value is present for SearchCampaignInfo, not even an explicit nil
### GetRoleCompositionCampaignInfo

`func (o *Campaign) GetRoleCompositionCampaignInfo() CampaignAllOfRoleCompositionCampaignInfo`

GetRoleCompositionCampaignInfo returns the RoleCompositionCampaignInfo field if non-nil, zero value otherwise.

### GetRoleCompositionCampaignInfoOk

`func (o *Campaign) GetRoleCompositionCampaignInfoOk() (*CampaignAllOfRoleCompositionCampaignInfo, bool)`

GetRoleCompositionCampaignInfoOk returns a tuple with the RoleCompositionCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleCompositionCampaignInfo

`func (o *Campaign) SetRoleCompositionCampaignInfo(v CampaignAllOfRoleCompositionCampaignInfo)`

SetRoleCompositionCampaignInfo sets RoleCompositionCampaignInfo field to given value.

### HasRoleCompositionCampaignInfo

`func (o *Campaign) HasRoleCompositionCampaignInfo() bool`

HasRoleCompositionCampaignInfo returns a boolean if a field has been set.

### SetRoleCompositionCampaignInfoNil

`func (o *Campaign) SetRoleCompositionCampaignInfoNil(b bool)`

 SetRoleCompositionCampaignInfoNil sets the value for RoleCompositionCampaignInfo to be an explicit nil

### UnsetRoleCompositionCampaignInfo
`func (o *Campaign) UnsetRoleCompositionCampaignInfo()`

UnsetRoleCompositionCampaignInfo ensures that no value is present for RoleCompositionCampaignInfo, not even an explicit nil
### GetMachineAccountCampaignInfo

`func (o *Campaign) GetMachineAccountCampaignInfo() CampaignAllOfMachineAccountCampaignInfo`

GetMachineAccountCampaignInfo returns the MachineAccountCampaignInfo field if non-nil, zero value otherwise.

### GetMachineAccountCampaignInfoOk

`func (o *Campaign) GetMachineAccountCampaignInfoOk() (*CampaignAllOfMachineAccountCampaignInfo, bool)`

GetMachineAccountCampaignInfoOk returns a tuple with the MachineAccountCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineAccountCampaignInfo

`func (o *Campaign) SetMachineAccountCampaignInfo(v CampaignAllOfMachineAccountCampaignInfo)`

SetMachineAccountCampaignInfo sets MachineAccountCampaignInfo field to given value.

### HasMachineAccountCampaignInfo

`func (o *Campaign) HasMachineAccountCampaignInfo() bool`

HasMachineAccountCampaignInfo returns a boolean if a field has been set.

### SetMachineAccountCampaignInfoNil

`func (o *Campaign) SetMachineAccountCampaignInfoNil(b bool)`

 SetMachineAccountCampaignInfoNil sets the value for MachineAccountCampaignInfo to be an explicit nil

### UnsetMachineAccountCampaignInfo
`func (o *Campaign) UnsetMachineAccountCampaignInfo()`

UnsetMachineAccountCampaignInfo ensures that no value is present for MachineAccountCampaignInfo, not even an explicit nil
### GetSourcesWithOrphanEntitlements

`func (o *Campaign) GetSourcesWithOrphanEntitlements() []CampaignAllOfSourcesWithOrphanEntitlements`

GetSourcesWithOrphanEntitlements returns the SourcesWithOrphanEntitlements field if non-nil, zero value otherwise.

### GetSourcesWithOrphanEntitlementsOk

`func (o *Campaign) GetSourcesWithOrphanEntitlementsOk() (*[]CampaignAllOfSourcesWithOrphanEntitlements, bool)`

GetSourcesWithOrphanEntitlementsOk returns a tuple with the SourcesWithOrphanEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourcesWithOrphanEntitlements

`func (o *Campaign) SetSourcesWithOrphanEntitlements(v []CampaignAllOfSourcesWithOrphanEntitlements)`

SetSourcesWithOrphanEntitlements sets SourcesWithOrphanEntitlements field to given value.

### HasSourcesWithOrphanEntitlements

`func (o *Campaign) HasSourcesWithOrphanEntitlements() bool`

HasSourcesWithOrphanEntitlements returns a boolean if a field has been set.

### SetSourcesWithOrphanEntitlementsNil

`func (o *Campaign) SetSourcesWithOrphanEntitlementsNil(b bool)`

 SetSourcesWithOrphanEntitlementsNil sets the value for SourcesWithOrphanEntitlements to be an explicit nil

### UnsetSourcesWithOrphanEntitlements
`func (o *Campaign) UnsetSourcesWithOrphanEntitlements()`

UnsetSourcesWithOrphanEntitlements ensures that no value is present for SourcesWithOrphanEntitlements, not even an explicit nil
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


