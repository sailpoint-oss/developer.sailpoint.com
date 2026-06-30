---
id: v1-get-discovered-applications-v1200-response-inner
title: GetDiscoveredApplicationsV1200ResponseInner
pagination_label: GetDiscoveredApplicationsV1200ResponseInner
sidebar_label: GetDiscoveredApplicationsV1200ResponseInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetDiscoveredApplicationsV1200ResponseInner', 'V1GetDiscoveredApplicationsV1200ResponseInner'] 
slug: /tools/sdk/go/applicationdiscovery/models/get-discovered-applications-v1200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetDiscoveredApplicationsV1200ResponseInner', 'V1GetDiscoveredApplicationsV1200ResponseInner']
---

# GetDiscoveredApplicationsV1200ResponseInner

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
**RiskScore** | Pointer to **int32** | The risk score of the application ranging from 0-100, 100 being highest risk. | [optional] 
**IsBusiness** | Pointer to **bool** | Indicates whether the application is used for business purposes. | [optional] [default to true]
**TotalSigninsCount** | Pointer to **int32** | The total number of sign-in accounts for the application. | [optional] 
**RiskLevel** | Pointer to **string** | The risk level of the application. | [optional] 
**IsPrivileged** | Pointer to **bool** | Indicates whether the application has privileged access. | [optional] [default to false]
**WarrantyExpiration** | Pointer to **string** | The warranty expiration date of the application. | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Additional attributes of the application useful for visibility of governance posture. | [optional] 
**AssociatedSources** | Pointer to **[]string** | List of associated sources related to this discovered application. | [optional] 

## Methods

### NewGetDiscoveredApplicationsV1200ResponseInner

`func NewGetDiscoveredApplicationsV1200ResponseInner() *GetDiscoveredApplicationsV1200ResponseInner`

NewGetDiscoveredApplicationsV1200ResponseInner instantiates a new GetDiscoveredApplicationsV1200ResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetDiscoveredApplicationsV1200ResponseInnerWithDefaults

`func NewGetDiscoveredApplicationsV1200ResponseInnerWithDefaults() *GetDiscoveredApplicationsV1200ResponseInner`

NewGetDiscoveredApplicationsV1200ResponseInnerWithDefaults instantiates a new GetDiscoveredApplicationsV1200ResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDiscoverySource

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetDiscoverySource() string`

GetDiscoverySource returns the DiscoverySource field if non-nil, zero value otherwise.

### GetDiscoverySourceOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetDiscoverySourceOk() (*string, bool)`

GetDiscoverySourceOk returns a tuple with the DiscoverySource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoverySource

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetDiscoverySource(v string)`

SetDiscoverySource sets DiscoverySource field to given value.

### HasDiscoverySource

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasDiscoverySource() bool`

HasDiscoverySource returns a boolean if a field has been set.

### GetDiscoveredVendor

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetDiscoveredVendor() string`

GetDiscoveredVendor returns the DiscoveredVendor field if non-nil, zero value otherwise.

### GetDiscoveredVendorOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetDiscoveredVendorOk() (*string, bool)`

GetDiscoveredVendorOk returns a tuple with the DiscoveredVendor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveredVendor

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetDiscoveredVendor(v string)`

SetDiscoveredVendor sets DiscoveredVendor field to given value.

### HasDiscoveredVendor

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasDiscoveredVendor() bool`

HasDiscoveredVendor returns a boolean if a field has been set.

### GetDescription

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRecommendedConnectors

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetRecommendedConnectors() []string`

GetRecommendedConnectors returns the RecommendedConnectors field if non-nil, zero value otherwise.

### GetRecommendedConnectorsOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetRecommendedConnectorsOk() (*[]string, bool)`

GetRecommendedConnectorsOk returns a tuple with the RecommendedConnectors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendedConnectors

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetRecommendedConnectors(v []string)`

SetRecommendedConnectors sets RecommendedConnectors field to given value.

### HasRecommendedConnectors

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasRecommendedConnectors() bool`

HasRecommendedConnectors returns a boolean if a field has been set.

### GetDiscoveredAt

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetDiscoveredAt() SailPointTime`

GetDiscoveredAt returns the DiscoveredAt field if non-nil, zero value otherwise.

### GetDiscoveredAtOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetDiscoveredAtOk() (*SailPointTime, bool)`

GetDiscoveredAtOk returns a tuple with the DiscoveredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveredAt

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetDiscoveredAt(v SailPointTime)`

SetDiscoveredAt sets DiscoveredAt field to given value.

### HasDiscoveredAt

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasDiscoveredAt() bool`

HasDiscoveredAt returns a boolean if a field has been set.

### GetCreatedAt

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetStatus

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetOperationalStatus

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetOperationalStatus() string`

GetOperationalStatus returns the OperationalStatus field if non-nil, zero value otherwise.

### GetOperationalStatusOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetOperationalStatusOk() (*string, bool)`

GetOperationalStatusOk returns a tuple with the OperationalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationalStatus

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetOperationalStatus(v string)`

SetOperationalStatus sets OperationalStatus field to given value.

### HasOperationalStatus

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasOperationalStatus() bool`

HasOperationalStatus returns a boolean if a field has been set.

### GetDiscoverySourceCategory

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetDiscoverySourceCategory() string`

GetDiscoverySourceCategory returns the DiscoverySourceCategory field if non-nil, zero value otherwise.

### GetDiscoverySourceCategoryOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetDiscoverySourceCategoryOk() (*string, bool)`

GetDiscoverySourceCategoryOk returns a tuple with the DiscoverySourceCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoverySourceCategory

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetDiscoverySourceCategory(v string)`

SetDiscoverySourceCategory sets DiscoverySourceCategory field to given value.

### HasDiscoverySourceCategory

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasDiscoverySourceCategory() bool`

HasDiscoverySourceCategory returns a boolean if a field has been set.

### GetLicenseCount

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetLicenseCount() int32`

GetLicenseCount returns the LicenseCount field if non-nil, zero value otherwise.

### GetLicenseCountOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetLicenseCountOk() (*int32, bool)`

GetLicenseCountOk returns a tuple with the LicenseCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLicenseCount

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetLicenseCount(v int32)`

SetLicenseCount sets LicenseCount field to given value.

### HasLicenseCount

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasLicenseCount() bool`

HasLicenseCount returns a boolean if a field has been set.

### GetIsSanctioned

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetIsSanctioned() bool`

GetIsSanctioned returns the IsSanctioned field if non-nil, zero value otherwise.

### GetIsSanctionedOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetIsSanctionedOk() (*bool, bool)`

GetIsSanctionedOk returns a tuple with the IsSanctioned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSanctioned

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetIsSanctioned(v bool)`

SetIsSanctioned sets IsSanctioned field to given value.

### HasIsSanctioned

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasIsSanctioned() bool`

HasIsSanctioned returns a boolean if a field has been set.

### GetLogo

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetLogo(v string)`

SetLogo sets Logo field to given value.

### HasLogo

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasLogo() bool`

HasLogo returns a boolean if a field has been set.

### GetAppUrl

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetAppUrl() string`

GetAppUrl returns the AppUrl field if non-nil, zero value otherwise.

### GetAppUrlOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetAppUrlOk() (*string, bool)`

GetAppUrlOk returns a tuple with the AppUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppUrl

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetAppUrl(v string)`

SetAppUrl sets AppUrl field to given value.

### HasAppUrl

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasAppUrl() bool`

HasAppUrl returns a boolean if a field has been set.

### GetGroups

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetGroups() []map[string]interface{}`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetGroupsOk() (*[]map[string]interface{}, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetGroups(v []map[string]interface{})`

SetGroups sets Groups field to given value.

### HasGroups

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasGroups() bool`

HasGroups returns a boolean if a field has been set.

### GetUsersCount

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetUsersCount() string`

GetUsersCount returns the UsersCount field if non-nil, zero value otherwise.

### GetUsersCountOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetUsersCountOk() (*string, bool)`

GetUsersCountOk returns a tuple with the UsersCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsersCount

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetUsersCount(v string)`

SetUsersCount sets UsersCount field to given value.

### HasUsersCount

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasUsersCount() bool`

HasUsersCount returns a boolean if a field has been set.

### GetApplicationOwner

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetApplicationOwner() []string`

GetApplicationOwner returns the ApplicationOwner field if non-nil, zero value otherwise.

### GetApplicationOwnerOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetApplicationOwnerOk() (*[]string, bool)`

GetApplicationOwnerOk returns a tuple with the ApplicationOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationOwner

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetApplicationOwner(v []string)`

SetApplicationOwner sets ApplicationOwner field to given value.

### HasApplicationOwner

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasApplicationOwner() bool`

HasApplicationOwner returns a boolean if a field has been set.

### GetItApplicationOwner

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetItApplicationOwner() []string`

GetItApplicationOwner returns the ItApplicationOwner field if non-nil, zero value otherwise.

### GetItApplicationOwnerOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetItApplicationOwnerOk() (*[]string, bool)`

GetItApplicationOwnerOk returns a tuple with the ItApplicationOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItApplicationOwner

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetItApplicationOwner(v []string)`

SetItApplicationOwner sets ItApplicationOwner field to given value.

### HasItApplicationOwner

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasItApplicationOwner() bool`

HasItApplicationOwner returns a boolean if a field has been set.

### GetBusinessCriticality

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetBusinessCriticality() string`

GetBusinessCriticality returns the BusinessCriticality field if non-nil, zero value otherwise.

### GetBusinessCriticalityOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetBusinessCriticalityOk() (*string, bool)`

GetBusinessCriticalityOk returns a tuple with the BusinessCriticality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessCriticality

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetBusinessCriticality(v string)`

SetBusinessCriticality sets BusinessCriticality field to given value.

### HasBusinessCriticality

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasBusinessCriticality() bool`

HasBusinessCriticality returns a boolean if a field has been set.

### GetDataClassification

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetDataClassification() string`

GetDataClassification returns the DataClassification field if non-nil, zero value otherwise.

### GetDataClassificationOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetDataClassificationOk() (*string, bool)`

GetDataClassificationOk returns a tuple with the DataClassification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataClassification

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetDataClassification(v string)`

SetDataClassification sets DataClassification field to given value.

### HasDataClassification

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasDataClassification() bool`

HasDataClassification returns a boolean if a field has been set.

### GetBusinessUnit

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetBusinessUnit() string`

GetBusinessUnit returns the BusinessUnit field if non-nil, zero value otherwise.

### GetBusinessUnitOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetBusinessUnitOk() (*string, bool)`

GetBusinessUnitOk returns a tuple with the BusinessUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessUnit

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetBusinessUnit(v string)`

SetBusinessUnit sets BusinessUnit field to given value.

### HasBusinessUnit

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasBusinessUnit() bool`

HasBusinessUnit returns a boolean if a field has been set.

### GetInstallType

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetInstallType() string`

GetInstallType returns the InstallType field if non-nil, zero value otherwise.

### GetInstallTypeOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetInstallTypeOk() (*string, bool)`

GetInstallTypeOk returns a tuple with the InstallType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallType

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetInstallType(v string)`

SetInstallType sets InstallType field to given value.

### HasInstallType

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasInstallType() bool`

HasInstallType returns a boolean if a field has been set.

### GetEnvironment

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetEnvironment() string`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetEnvironmentOk() (*string, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetEnvironment(v string)`

SetEnvironment sets Environment field to given value.

### HasEnvironment

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasEnvironment() bool`

HasEnvironment returns a boolean if a field has been set.

### GetRiskScore

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetRiskScore() int32`

GetRiskScore returns the RiskScore field if non-nil, zero value otherwise.

### GetRiskScoreOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetRiskScoreOk() (*int32, bool)`

GetRiskScoreOk returns a tuple with the RiskScore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskScore

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetRiskScore(v int32)`

SetRiskScore sets RiskScore field to given value.

### HasRiskScore

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasRiskScore() bool`

HasRiskScore returns a boolean if a field has been set.

### GetIsBusiness

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetIsBusiness() bool`

GetIsBusiness returns the IsBusiness field if non-nil, zero value otherwise.

### GetIsBusinessOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetIsBusinessOk() (*bool, bool)`

GetIsBusinessOk returns a tuple with the IsBusiness field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsBusiness

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetIsBusiness(v bool)`

SetIsBusiness sets IsBusiness field to given value.

### HasIsBusiness

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasIsBusiness() bool`

HasIsBusiness returns a boolean if a field has been set.

### GetTotalSigninsCount

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetTotalSigninsCount() int32`

GetTotalSigninsCount returns the TotalSigninsCount field if non-nil, zero value otherwise.

### GetTotalSigninsCountOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetTotalSigninsCountOk() (*int32, bool)`

GetTotalSigninsCountOk returns a tuple with the TotalSigninsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSigninsCount

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetTotalSigninsCount(v int32)`

SetTotalSigninsCount sets TotalSigninsCount field to given value.

### HasTotalSigninsCount

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasTotalSigninsCount() bool`

HasTotalSigninsCount returns a boolean if a field has been set.

### GetRiskLevel

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetRiskLevel() string`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetRiskLevelOk() (*string, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetRiskLevel(v string)`

SetRiskLevel sets RiskLevel field to given value.

### HasRiskLevel

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasRiskLevel() bool`

HasRiskLevel returns a boolean if a field has been set.

### GetIsPrivileged

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetIsPrivileged() bool`

GetIsPrivileged returns the IsPrivileged field if non-nil, zero value otherwise.

### GetIsPrivilegedOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetIsPrivilegedOk() (*bool, bool)`

GetIsPrivilegedOk returns a tuple with the IsPrivileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPrivileged

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetIsPrivileged(v bool)`

SetIsPrivileged sets IsPrivileged field to given value.

### HasIsPrivileged

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasIsPrivileged() bool`

HasIsPrivileged returns a boolean if a field has been set.

### GetWarrantyExpiration

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetWarrantyExpiration() string`

GetWarrantyExpiration returns the WarrantyExpiration field if non-nil, zero value otherwise.

### GetWarrantyExpirationOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetWarrantyExpirationOk() (*string, bool)`

GetWarrantyExpirationOk returns a tuple with the WarrantyExpiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarrantyExpiration

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetWarrantyExpiration(v string)`

SetWarrantyExpiration sets WarrantyExpiration field to given value.

### HasWarrantyExpiration

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasWarrantyExpiration() bool`

HasWarrantyExpiration returns a boolean if a field has been set.

### GetAttributes

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetAssociatedSources

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetAssociatedSources() []string`

GetAssociatedSources returns the AssociatedSources field if non-nil, zero value otherwise.

### GetAssociatedSourcesOk

`func (o *GetDiscoveredApplicationsV1200ResponseInner) GetAssociatedSourcesOk() (*[]string, bool)`

GetAssociatedSourcesOk returns a tuple with the AssociatedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedSources

`func (o *GetDiscoveredApplicationsV1200ResponseInner) SetAssociatedSources(v []string)`

SetAssociatedSources sets AssociatedSources field to given value.

### HasAssociatedSources

`func (o *GetDiscoveredApplicationsV1200ResponseInner) HasAssociatedSources() bool`

HasAssociatedSources returns a boolean if a field has been set.


