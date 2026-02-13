---
id: v2025-get-discovered-applications200-response-inner
title: GetDiscoveredApplications200ResponseInner
pagination_label: GetDiscoveredApplications200ResponseInner
sidebar_label: GetDiscoveredApplications200ResponseInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetDiscoveredApplications200ResponseInner', 'V2025GetDiscoveredApplications200ResponseInner'] 
slug: /tools/sdk/go/v2025/models/get-discovered-applications200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetDiscoveredApplications200ResponseInner', 'V2025GetDiscoveredApplications200ResponseInner']
---

# GetDiscoveredApplications200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier for the discovered application. | [optional] 
**Name** | Pointer to **string** | Name of the discovered application. | [optional] 
**DiscoverySource** | Pointer to **string** | Source from which the application was discovered. | [optional] 
**DiscoveredVendor** | Pointer to **string** | The vendor associated with the discovered application. | [optional] 
**Description** | Pointer to **string** | A brief description of the discovered application. | [optional] 
**RecommendedConnectors** | Pointer to **[]string** | List of recommended connectors for the application. | [optional] 
**DiscoveredAt** | Pointer to **SailPointTime** | The timestamp when the application was last received via an entitlement aggregation invocation  or a manual csv upload, in ISO 8601 format. | [optional] 
**CreatedAt** | Pointer to **SailPointTime** | The timestamp when the application was first discovered, in ISO 8601 format. | [optional] 
**Status** | Pointer to **string** | The status of an application within the discovery source.  By default this field is set to \"ACTIVE\" when the application is discovered.  If an application has been deleted from within the discovery source, the status will be set to \"INACTIVE\". | [optional] 
**OperationalStatus** | Pointer to **string** | The operational status of the application. | [optional] 
**DiscoverySourceCategory** | Pointer to **string** | The category of the discovery source. | [optional] 
**LicenseCount** | Pointer to **int32** | The number of licenses associated with the application. | [optional] 
**IsSanctioned** | Pointer to **bool** | Indicates whether the application is sanctioned. | [optional] [default to false]
**Logo** | Pointer to **string** | URL of the application's logo. | [optional] 
**AppUrl** | Pointer to **string** | The URL of the application. | [optional] 
**Groups** | Pointer to **[]map[string]interface{}** | List of groups associated with the application. | [optional] 
**UsersCount** | Pointer to **string** | The count of users associated with the application. | [optional] 
**ApplicationOwner** | Pointer to **[]string** | The owners of the application. | [optional] 
**ItApplicationOwner** | Pointer to **[]string** | The IT owners of the application. | [optional] 
**BusinessCriticality** | Pointer to **string** | The business criticality level of the application. | [optional] 
**DataClassification** | Pointer to **string** | The data classification level of the application. | [optional] 
**BusinessUnit** | Pointer to **string** | The business unit associated with the application. | [optional] 
**InstallType** | Pointer to **string** | The installation type of the application. | [optional] 
**Environment** | Pointer to **string** | The environment in which the application operates. | [optional] 
**RiskScore** | Pointer to **string** | The risk score of the application. | [optional] 
**IsPrivileged** | Pointer to **bool** | Indicates whether the application has privileged access. | [optional] [default to false]
**WarrantyExpiration** | Pointer to **string** | The warranty expiration date of the application. | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Additional attributes of the application useful for visibility of governance posture. | [optional] 
**AssociatedSources** | Pointer to **[]string** | List of associated sources related to this discovered application. | [optional] 

## Methods

### NewGetDiscoveredApplications200ResponseInner

`func NewGetDiscoveredApplications200ResponseInner() *GetDiscoveredApplications200ResponseInner`

NewGetDiscoveredApplications200ResponseInner instantiates a new GetDiscoveredApplications200ResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetDiscoveredApplications200ResponseInnerWithDefaults

`func NewGetDiscoveredApplications200ResponseInnerWithDefaults() *GetDiscoveredApplications200ResponseInner`

NewGetDiscoveredApplications200ResponseInnerWithDefaults instantiates a new GetDiscoveredApplications200ResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetDiscoveredApplications200ResponseInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetDiscoveredApplications200ResponseInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetDiscoveredApplications200ResponseInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GetDiscoveredApplications200ResponseInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *GetDiscoveredApplications200ResponseInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetDiscoveredApplications200ResponseInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetDiscoveredApplications200ResponseInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *GetDiscoveredApplications200ResponseInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDiscoverySource

`func (o *GetDiscoveredApplications200ResponseInner) GetDiscoverySource() string`

GetDiscoverySource returns the DiscoverySource field if non-nil, zero value otherwise.

### GetDiscoverySourceOk

`func (o *GetDiscoveredApplications200ResponseInner) GetDiscoverySourceOk() (*string, bool)`

GetDiscoverySourceOk returns a tuple with the DiscoverySource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoverySource

`func (o *GetDiscoveredApplications200ResponseInner) SetDiscoverySource(v string)`

SetDiscoverySource sets DiscoverySource field to given value.

### HasDiscoverySource

`func (o *GetDiscoveredApplications200ResponseInner) HasDiscoverySource() bool`

HasDiscoverySource returns a boolean if a field has been set.

### GetDiscoveredVendor

`func (o *GetDiscoveredApplications200ResponseInner) GetDiscoveredVendor() string`

GetDiscoveredVendor returns the DiscoveredVendor field if non-nil, zero value otherwise.

### GetDiscoveredVendorOk

`func (o *GetDiscoveredApplications200ResponseInner) GetDiscoveredVendorOk() (*string, bool)`

GetDiscoveredVendorOk returns a tuple with the DiscoveredVendor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveredVendor

`func (o *GetDiscoveredApplications200ResponseInner) SetDiscoveredVendor(v string)`

SetDiscoveredVendor sets DiscoveredVendor field to given value.

### HasDiscoveredVendor

`func (o *GetDiscoveredApplications200ResponseInner) HasDiscoveredVendor() bool`

HasDiscoveredVendor returns a boolean if a field has been set.

### GetDescription

`func (o *GetDiscoveredApplications200ResponseInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GetDiscoveredApplications200ResponseInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GetDiscoveredApplications200ResponseInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GetDiscoveredApplications200ResponseInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRecommendedConnectors

`func (o *GetDiscoveredApplications200ResponseInner) GetRecommendedConnectors() []string`

GetRecommendedConnectors returns the RecommendedConnectors field if non-nil, zero value otherwise.

### GetRecommendedConnectorsOk

`func (o *GetDiscoveredApplications200ResponseInner) GetRecommendedConnectorsOk() (*[]string, bool)`

GetRecommendedConnectorsOk returns a tuple with the RecommendedConnectors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendedConnectors

`func (o *GetDiscoveredApplications200ResponseInner) SetRecommendedConnectors(v []string)`

SetRecommendedConnectors sets RecommendedConnectors field to given value.

### HasRecommendedConnectors

`func (o *GetDiscoveredApplications200ResponseInner) HasRecommendedConnectors() bool`

HasRecommendedConnectors returns a boolean if a field has been set.

### GetDiscoveredAt

`func (o *GetDiscoveredApplications200ResponseInner) GetDiscoveredAt() SailPointTime`

GetDiscoveredAt returns the DiscoveredAt field if non-nil, zero value otherwise.

### GetDiscoveredAtOk

`func (o *GetDiscoveredApplications200ResponseInner) GetDiscoveredAtOk() (*SailPointTime, bool)`

GetDiscoveredAtOk returns a tuple with the DiscoveredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveredAt

`func (o *GetDiscoveredApplications200ResponseInner) SetDiscoveredAt(v SailPointTime)`

SetDiscoveredAt sets DiscoveredAt field to given value.

### HasDiscoveredAt

`func (o *GetDiscoveredApplications200ResponseInner) HasDiscoveredAt() bool`

HasDiscoveredAt returns a boolean if a field has been set.

### GetCreatedAt

`func (o *GetDiscoveredApplications200ResponseInner) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GetDiscoveredApplications200ResponseInner) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GetDiscoveredApplications200ResponseInner) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *GetDiscoveredApplications200ResponseInner) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetStatus

`func (o *GetDiscoveredApplications200ResponseInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetDiscoveredApplications200ResponseInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetDiscoveredApplications200ResponseInner) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetDiscoveredApplications200ResponseInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetOperationalStatus

`func (o *GetDiscoveredApplications200ResponseInner) GetOperationalStatus() string`

GetOperationalStatus returns the OperationalStatus field if non-nil, zero value otherwise.

### GetOperationalStatusOk

`func (o *GetDiscoveredApplications200ResponseInner) GetOperationalStatusOk() (*string, bool)`

GetOperationalStatusOk returns a tuple with the OperationalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationalStatus

`func (o *GetDiscoveredApplications200ResponseInner) SetOperationalStatus(v string)`

SetOperationalStatus sets OperationalStatus field to given value.

### HasOperationalStatus

`func (o *GetDiscoveredApplications200ResponseInner) HasOperationalStatus() bool`

HasOperationalStatus returns a boolean if a field has been set.

### GetDiscoverySourceCategory

`func (o *GetDiscoveredApplications200ResponseInner) GetDiscoverySourceCategory() string`

GetDiscoverySourceCategory returns the DiscoverySourceCategory field if non-nil, zero value otherwise.

### GetDiscoverySourceCategoryOk

`func (o *GetDiscoveredApplications200ResponseInner) GetDiscoverySourceCategoryOk() (*string, bool)`

GetDiscoverySourceCategoryOk returns a tuple with the DiscoverySourceCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoverySourceCategory

`func (o *GetDiscoveredApplications200ResponseInner) SetDiscoverySourceCategory(v string)`

SetDiscoverySourceCategory sets DiscoverySourceCategory field to given value.

### HasDiscoverySourceCategory

`func (o *GetDiscoveredApplications200ResponseInner) HasDiscoverySourceCategory() bool`

HasDiscoverySourceCategory returns a boolean if a field has been set.

### GetLicenseCount

`func (o *GetDiscoveredApplications200ResponseInner) GetLicenseCount() int32`

GetLicenseCount returns the LicenseCount field if non-nil, zero value otherwise.

### GetLicenseCountOk

`func (o *GetDiscoveredApplications200ResponseInner) GetLicenseCountOk() (*int32, bool)`

GetLicenseCountOk returns a tuple with the LicenseCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLicenseCount

`func (o *GetDiscoveredApplications200ResponseInner) SetLicenseCount(v int32)`

SetLicenseCount sets LicenseCount field to given value.

### HasLicenseCount

`func (o *GetDiscoveredApplications200ResponseInner) HasLicenseCount() bool`

HasLicenseCount returns a boolean if a field has been set.

### GetIsSanctioned

`func (o *GetDiscoveredApplications200ResponseInner) GetIsSanctioned() bool`

GetIsSanctioned returns the IsSanctioned field if non-nil, zero value otherwise.

### GetIsSanctionedOk

`func (o *GetDiscoveredApplications200ResponseInner) GetIsSanctionedOk() (*bool, bool)`

GetIsSanctionedOk returns a tuple with the IsSanctioned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSanctioned

`func (o *GetDiscoveredApplications200ResponseInner) SetIsSanctioned(v bool)`

SetIsSanctioned sets IsSanctioned field to given value.

### HasIsSanctioned

`func (o *GetDiscoveredApplications200ResponseInner) HasIsSanctioned() bool`

HasIsSanctioned returns a boolean if a field has been set.

### GetLogo

`func (o *GetDiscoveredApplications200ResponseInner) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *GetDiscoveredApplications200ResponseInner) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *GetDiscoveredApplications200ResponseInner) SetLogo(v string)`

SetLogo sets Logo field to given value.

### HasLogo

`func (o *GetDiscoveredApplications200ResponseInner) HasLogo() bool`

HasLogo returns a boolean if a field has been set.

### GetAppUrl

`func (o *GetDiscoveredApplications200ResponseInner) GetAppUrl() string`

GetAppUrl returns the AppUrl field if non-nil, zero value otherwise.

### GetAppUrlOk

`func (o *GetDiscoveredApplications200ResponseInner) GetAppUrlOk() (*string, bool)`

GetAppUrlOk returns a tuple with the AppUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppUrl

`func (o *GetDiscoveredApplications200ResponseInner) SetAppUrl(v string)`

SetAppUrl sets AppUrl field to given value.

### HasAppUrl

`func (o *GetDiscoveredApplications200ResponseInner) HasAppUrl() bool`

HasAppUrl returns a boolean if a field has been set.

### GetGroups

`func (o *GetDiscoveredApplications200ResponseInner) GetGroups() []map[string]interface{}`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *GetDiscoveredApplications200ResponseInner) GetGroupsOk() (*[]map[string]interface{}, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *GetDiscoveredApplications200ResponseInner) SetGroups(v []map[string]interface{})`

SetGroups sets Groups field to given value.

### HasGroups

`func (o *GetDiscoveredApplications200ResponseInner) HasGroups() bool`

HasGroups returns a boolean if a field has been set.

### GetUsersCount

`func (o *GetDiscoveredApplications200ResponseInner) GetUsersCount() string`

GetUsersCount returns the UsersCount field if non-nil, zero value otherwise.

### GetUsersCountOk

`func (o *GetDiscoveredApplications200ResponseInner) GetUsersCountOk() (*string, bool)`

GetUsersCountOk returns a tuple with the UsersCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsersCount

`func (o *GetDiscoveredApplications200ResponseInner) SetUsersCount(v string)`

SetUsersCount sets UsersCount field to given value.

### HasUsersCount

`func (o *GetDiscoveredApplications200ResponseInner) HasUsersCount() bool`

HasUsersCount returns a boolean if a field has been set.

### GetApplicationOwner

`func (o *GetDiscoveredApplications200ResponseInner) GetApplicationOwner() []string`

GetApplicationOwner returns the ApplicationOwner field if non-nil, zero value otherwise.

### GetApplicationOwnerOk

`func (o *GetDiscoveredApplications200ResponseInner) GetApplicationOwnerOk() (*[]string, bool)`

GetApplicationOwnerOk returns a tuple with the ApplicationOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationOwner

`func (o *GetDiscoveredApplications200ResponseInner) SetApplicationOwner(v []string)`

SetApplicationOwner sets ApplicationOwner field to given value.

### HasApplicationOwner

`func (o *GetDiscoveredApplications200ResponseInner) HasApplicationOwner() bool`

HasApplicationOwner returns a boolean if a field has been set.

### GetItApplicationOwner

`func (o *GetDiscoveredApplications200ResponseInner) GetItApplicationOwner() []string`

GetItApplicationOwner returns the ItApplicationOwner field if non-nil, zero value otherwise.

### GetItApplicationOwnerOk

`func (o *GetDiscoveredApplications200ResponseInner) GetItApplicationOwnerOk() (*[]string, bool)`

GetItApplicationOwnerOk returns a tuple with the ItApplicationOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItApplicationOwner

`func (o *GetDiscoveredApplications200ResponseInner) SetItApplicationOwner(v []string)`

SetItApplicationOwner sets ItApplicationOwner field to given value.

### HasItApplicationOwner

`func (o *GetDiscoveredApplications200ResponseInner) HasItApplicationOwner() bool`

HasItApplicationOwner returns a boolean if a field has been set.

### GetBusinessCriticality

`func (o *GetDiscoveredApplications200ResponseInner) GetBusinessCriticality() string`

GetBusinessCriticality returns the BusinessCriticality field if non-nil, zero value otherwise.

### GetBusinessCriticalityOk

`func (o *GetDiscoveredApplications200ResponseInner) GetBusinessCriticalityOk() (*string, bool)`

GetBusinessCriticalityOk returns a tuple with the BusinessCriticality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessCriticality

`func (o *GetDiscoveredApplications200ResponseInner) SetBusinessCriticality(v string)`

SetBusinessCriticality sets BusinessCriticality field to given value.

### HasBusinessCriticality

`func (o *GetDiscoveredApplications200ResponseInner) HasBusinessCriticality() bool`

HasBusinessCriticality returns a boolean if a field has been set.

### GetDataClassification

`func (o *GetDiscoveredApplications200ResponseInner) GetDataClassification() string`

GetDataClassification returns the DataClassification field if non-nil, zero value otherwise.

### GetDataClassificationOk

`func (o *GetDiscoveredApplications200ResponseInner) GetDataClassificationOk() (*string, bool)`

GetDataClassificationOk returns a tuple with the DataClassification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataClassification

`func (o *GetDiscoveredApplications200ResponseInner) SetDataClassification(v string)`

SetDataClassification sets DataClassification field to given value.

### HasDataClassification

`func (o *GetDiscoveredApplications200ResponseInner) HasDataClassification() bool`

HasDataClassification returns a boolean if a field has been set.

### GetBusinessUnit

`func (o *GetDiscoveredApplications200ResponseInner) GetBusinessUnit() string`

GetBusinessUnit returns the BusinessUnit field if non-nil, zero value otherwise.

### GetBusinessUnitOk

`func (o *GetDiscoveredApplications200ResponseInner) GetBusinessUnitOk() (*string, bool)`

GetBusinessUnitOk returns a tuple with the BusinessUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessUnit

`func (o *GetDiscoveredApplications200ResponseInner) SetBusinessUnit(v string)`

SetBusinessUnit sets BusinessUnit field to given value.

### HasBusinessUnit

`func (o *GetDiscoveredApplications200ResponseInner) HasBusinessUnit() bool`

HasBusinessUnit returns a boolean if a field has been set.

### GetInstallType

`func (o *GetDiscoveredApplications200ResponseInner) GetInstallType() string`

GetInstallType returns the InstallType field if non-nil, zero value otherwise.

### GetInstallTypeOk

`func (o *GetDiscoveredApplications200ResponseInner) GetInstallTypeOk() (*string, bool)`

GetInstallTypeOk returns a tuple with the InstallType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallType

`func (o *GetDiscoveredApplications200ResponseInner) SetInstallType(v string)`

SetInstallType sets InstallType field to given value.

### HasInstallType

`func (o *GetDiscoveredApplications200ResponseInner) HasInstallType() bool`

HasInstallType returns a boolean if a field has been set.

### GetEnvironment

`func (o *GetDiscoveredApplications200ResponseInner) GetEnvironment() string`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *GetDiscoveredApplications200ResponseInner) GetEnvironmentOk() (*string, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *GetDiscoveredApplications200ResponseInner) SetEnvironment(v string)`

SetEnvironment sets Environment field to given value.

### HasEnvironment

`func (o *GetDiscoveredApplications200ResponseInner) HasEnvironment() bool`

HasEnvironment returns a boolean if a field has been set.

### GetRiskScore

`func (o *GetDiscoveredApplications200ResponseInner) GetRiskScore() string`

GetRiskScore returns the RiskScore field if non-nil, zero value otherwise.

### GetRiskScoreOk

`func (o *GetDiscoveredApplications200ResponseInner) GetRiskScoreOk() (*string, bool)`

GetRiskScoreOk returns a tuple with the RiskScore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskScore

`func (o *GetDiscoveredApplications200ResponseInner) SetRiskScore(v string)`

SetRiskScore sets RiskScore field to given value.

### HasRiskScore

`func (o *GetDiscoveredApplications200ResponseInner) HasRiskScore() bool`

HasRiskScore returns a boolean if a field has been set.

### GetIsPrivileged

`func (o *GetDiscoveredApplications200ResponseInner) GetIsPrivileged() bool`

GetIsPrivileged returns the IsPrivileged field if non-nil, zero value otherwise.

### GetIsPrivilegedOk

`func (o *GetDiscoveredApplications200ResponseInner) GetIsPrivilegedOk() (*bool, bool)`

GetIsPrivilegedOk returns a tuple with the IsPrivileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPrivileged

`func (o *GetDiscoveredApplications200ResponseInner) SetIsPrivileged(v bool)`

SetIsPrivileged sets IsPrivileged field to given value.

### HasIsPrivileged

`func (o *GetDiscoveredApplications200ResponseInner) HasIsPrivileged() bool`

HasIsPrivileged returns a boolean if a field has been set.

### GetWarrantyExpiration

`func (o *GetDiscoveredApplications200ResponseInner) GetWarrantyExpiration() string`

GetWarrantyExpiration returns the WarrantyExpiration field if non-nil, zero value otherwise.

### GetWarrantyExpirationOk

`func (o *GetDiscoveredApplications200ResponseInner) GetWarrantyExpirationOk() (*string, bool)`

GetWarrantyExpirationOk returns a tuple with the WarrantyExpiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarrantyExpiration

`func (o *GetDiscoveredApplications200ResponseInner) SetWarrantyExpiration(v string)`

SetWarrantyExpiration sets WarrantyExpiration field to given value.

### HasWarrantyExpiration

`func (o *GetDiscoveredApplications200ResponseInner) HasWarrantyExpiration() bool`

HasWarrantyExpiration returns a boolean if a field has been set.

### GetAttributes

`func (o *GetDiscoveredApplications200ResponseInner) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *GetDiscoveredApplications200ResponseInner) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *GetDiscoveredApplications200ResponseInner) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *GetDiscoveredApplications200ResponseInner) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetAssociatedSources

`func (o *GetDiscoveredApplications200ResponseInner) GetAssociatedSources() []string`

GetAssociatedSources returns the AssociatedSources field if non-nil, zero value otherwise.

### GetAssociatedSourcesOk

`func (o *GetDiscoveredApplications200ResponseInner) GetAssociatedSourcesOk() (*[]string, bool)`

GetAssociatedSourcesOk returns a tuple with the AssociatedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedSources

`func (o *GetDiscoveredApplications200ResponseInner) SetAssociatedSources(v []string)`

SetAssociatedSources sets AssociatedSources field to given value.

### HasAssociatedSources

`func (o *GetDiscoveredApplications200ResponseInner) HasAssociatedSources() bool`

HasAssociatedSources returns a boolean if a field has been set.


