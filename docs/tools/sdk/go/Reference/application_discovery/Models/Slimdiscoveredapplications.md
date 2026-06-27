---
id: v1-slimdiscoveredapplications
title: Slimdiscoveredapplications
pagination_label: Slimdiscoveredapplications
sidebar_label: Slimdiscoveredapplications
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Slimdiscoveredapplications', 'V1Slimdiscoveredapplications'] 
slug: /tools/sdk/go/applicationdiscovery/models/slimdiscoveredapplications
tags: ['SDK', 'Software Development Kit', 'Slimdiscoveredapplications', 'V1Slimdiscoveredapplications']
---

# Slimdiscoveredapplications

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

## Methods

### NewSlimdiscoveredapplications

`func NewSlimdiscoveredapplications() *Slimdiscoveredapplications`

NewSlimdiscoveredapplications instantiates a new Slimdiscoveredapplications object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSlimdiscoveredapplicationsWithDefaults

`func NewSlimdiscoveredapplicationsWithDefaults() *Slimdiscoveredapplications`

NewSlimdiscoveredapplicationsWithDefaults instantiates a new Slimdiscoveredapplications object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Slimdiscoveredapplications) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Slimdiscoveredapplications) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Slimdiscoveredapplications) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Slimdiscoveredapplications) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Slimdiscoveredapplications) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Slimdiscoveredapplications) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Slimdiscoveredapplications) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Slimdiscoveredapplications) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDiscoverySource

`func (o *Slimdiscoveredapplications) GetDiscoverySource() string`

GetDiscoverySource returns the DiscoverySource field if non-nil, zero value otherwise.

### GetDiscoverySourceOk

`func (o *Slimdiscoveredapplications) GetDiscoverySourceOk() (*string, bool)`

GetDiscoverySourceOk returns a tuple with the DiscoverySource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoverySource

`func (o *Slimdiscoveredapplications) SetDiscoverySource(v string)`

SetDiscoverySource sets DiscoverySource field to given value.

### HasDiscoverySource

`func (o *Slimdiscoveredapplications) HasDiscoverySource() bool`

HasDiscoverySource returns a boolean if a field has been set.

### GetDiscoveredVendor

`func (o *Slimdiscoveredapplications) GetDiscoveredVendor() string`

GetDiscoveredVendor returns the DiscoveredVendor field if non-nil, zero value otherwise.

### GetDiscoveredVendorOk

`func (o *Slimdiscoveredapplications) GetDiscoveredVendorOk() (*string, bool)`

GetDiscoveredVendorOk returns a tuple with the DiscoveredVendor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveredVendor

`func (o *Slimdiscoveredapplications) SetDiscoveredVendor(v string)`

SetDiscoveredVendor sets DiscoveredVendor field to given value.

### HasDiscoveredVendor

`func (o *Slimdiscoveredapplications) HasDiscoveredVendor() bool`

HasDiscoveredVendor returns a boolean if a field has been set.

### GetDescription

`func (o *Slimdiscoveredapplications) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Slimdiscoveredapplications) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Slimdiscoveredapplications) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Slimdiscoveredapplications) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRecommendedConnectors

`func (o *Slimdiscoveredapplications) GetRecommendedConnectors() []string`

GetRecommendedConnectors returns the RecommendedConnectors field if non-nil, zero value otherwise.

### GetRecommendedConnectorsOk

`func (o *Slimdiscoveredapplications) GetRecommendedConnectorsOk() (*[]string, bool)`

GetRecommendedConnectorsOk returns a tuple with the RecommendedConnectors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendedConnectors

`func (o *Slimdiscoveredapplications) SetRecommendedConnectors(v []string)`

SetRecommendedConnectors sets RecommendedConnectors field to given value.

### HasRecommendedConnectors

`func (o *Slimdiscoveredapplications) HasRecommendedConnectors() bool`

HasRecommendedConnectors returns a boolean if a field has been set.

### GetDiscoveredAt

`func (o *Slimdiscoveredapplications) GetDiscoveredAt() SailPointTime`

GetDiscoveredAt returns the DiscoveredAt field if non-nil, zero value otherwise.

### GetDiscoveredAtOk

`func (o *Slimdiscoveredapplications) GetDiscoveredAtOk() (*SailPointTime, bool)`

GetDiscoveredAtOk returns a tuple with the DiscoveredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveredAt

`func (o *Slimdiscoveredapplications) SetDiscoveredAt(v SailPointTime)`

SetDiscoveredAt sets DiscoveredAt field to given value.

### HasDiscoveredAt

`func (o *Slimdiscoveredapplications) HasDiscoveredAt() bool`

HasDiscoveredAt returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Slimdiscoveredapplications) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Slimdiscoveredapplications) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Slimdiscoveredapplications) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Slimdiscoveredapplications) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetStatus

`func (o *Slimdiscoveredapplications) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Slimdiscoveredapplications) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Slimdiscoveredapplications) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Slimdiscoveredapplications) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetOperationalStatus

`func (o *Slimdiscoveredapplications) GetOperationalStatus() string`

GetOperationalStatus returns the OperationalStatus field if non-nil, zero value otherwise.

### GetOperationalStatusOk

`func (o *Slimdiscoveredapplications) GetOperationalStatusOk() (*string, bool)`

GetOperationalStatusOk returns a tuple with the OperationalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationalStatus

`func (o *Slimdiscoveredapplications) SetOperationalStatus(v string)`

SetOperationalStatus sets OperationalStatus field to given value.

### HasOperationalStatus

`func (o *Slimdiscoveredapplications) HasOperationalStatus() bool`

HasOperationalStatus returns a boolean if a field has been set.

### GetDiscoverySourceCategory

`func (o *Slimdiscoveredapplications) GetDiscoverySourceCategory() string`

GetDiscoverySourceCategory returns the DiscoverySourceCategory field if non-nil, zero value otherwise.

### GetDiscoverySourceCategoryOk

`func (o *Slimdiscoveredapplications) GetDiscoverySourceCategoryOk() (*string, bool)`

GetDiscoverySourceCategoryOk returns a tuple with the DiscoverySourceCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoverySourceCategory

`func (o *Slimdiscoveredapplications) SetDiscoverySourceCategory(v string)`

SetDiscoverySourceCategory sets DiscoverySourceCategory field to given value.

### HasDiscoverySourceCategory

`func (o *Slimdiscoveredapplications) HasDiscoverySourceCategory() bool`

HasDiscoverySourceCategory returns a boolean if a field has been set.

### GetLicenseCount

`func (o *Slimdiscoveredapplications) GetLicenseCount() int32`

GetLicenseCount returns the LicenseCount field if non-nil, zero value otherwise.

### GetLicenseCountOk

`func (o *Slimdiscoveredapplications) GetLicenseCountOk() (*int32, bool)`

GetLicenseCountOk returns a tuple with the LicenseCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLicenseCount

`func (o *Slimdiscoveredapplications) SetLicenseCount(v int32)`

SetLicenseCount sets LicenseCount field to given value.

### HasLicenseCount

`func (o *Slimdiscoveredapplications) HasLicenseCount() bool`

HasLicenseCount returns a boolean if a field has been set.

### GetIsSanctioned

`func (o *Slimdiscoveredapplications) GetIsSanctioned() bool`

GetIsSanctioned returns the IsSanctioned field if non-nil, zero value otherwise.

### GetIsSanctionedOk

`func (o *Slimdiscoveredapplications) GetIsSanctionedOk() (*bool, bool)`

GetIsSanctionedOk returns a tuple with the IsSanctioned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSanctioned

`func (o *Slimdiscoveredapplications) SetIsSanctioned(v bool)`

SetIsSanctioned sets IsSanctioned field to given value.

### HasIsSanctioned

`func (o *Slimdiscoveredapplications) HasIsSanctioned() bool`

HasIsSanctioned returns a boolean if a field has been set.

### GetLogo

`func (o *Slimdiscoveredapplications) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *Slimdiscoveredapplications) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *Slimdiscoveredapplications) SetLogo(v string)`

SetLogo sets Logo field to given value.

### HasLogo

`func (o *Slimdiscoveredapplications) HasLogo() bool`

HasLogo returns a boolean if a field has been set.

### GetAppUrl

`func (o *Slimdiscoveredapplications) GetAppUrl() string`

GetAppUrl returns the AppUrl field if non-nil, zero value otherwise.

### GetAppUrlOk

`func (o *Slimdiscoveredapplications) GetAppUrlOk() (*string, bool)`

GetAppUrlOk returns a tuple with the AppUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppUrl

`func (o *Slimdiscoveredapplications) SetAppUrl(v string)`

SetAppUrl sets AppUrl field to given value.

### HasAppUrl

`func (o *Slimdiscoveredapplications) HasAppUrl() bool`

HasAppUrl returns a boolean if a field has been set.

### GetGroups

`func (o *Slimdiscoveredapplications) GetGroups() []map[string]interface{}`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *Slimdiscoveredapplications) GetGroupsOk() (*[]map[string]interface{}, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *Slimdiscoveredapplications) SetGroups(v []map[string]interface{})`

SetGroups sets Groups field to given value.

### HasGroups

`func (o *Slimdiscoveredapplications) HasGroups() bool`

HasGroups returns a boolean if a field has been set.

### GetUsersCount

`func (o *Slimdiscoveredapplications) GetUsersCount() string`

GetUsersCount returns the UsersCount field if non-nil, zero value otherwise.

### GetUsersCountOk

`func (o *Slimdiscoveredapplications) GetUsersCountOk() (*string, bool)`

GetUsersCountOk returns a tuple with the UsersCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsersCount

`func (o *Slimdiscoveredapplications) SetUsersCount(v string)`

SetUsersCount sets UsersCount field to given value.

### HasUsersCount

`func (o *Slimdiscoveredapplications) HasUsersCount() bool`

HasUsersCount returns a boolean if a field has been set.

### GetApplicationOwner

`func (o *Slimdiscoveredapplications) GetApplicationOwner() []string`

GetApplicationOwner returns the ApplicationOwner field if non-nil, zero value otherwise.

### GetApplicationOwnerOk

`func (o *Slimdiscoveredapplications) GetApplicationOwnerOk() (*[]string, bool)`

GetApplicationOwnerOk returns a tuple with the ApplicationOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationOwner

`func (o *Slimdiscoveredapplications) SetApplicationOwner(v []string)`

SetApplicationOwner sets ApplicationOwner field to given value.

### HasApplicationOwner

`func (o *Slimdiscoveredapplications) HasApplicationOwner() bool`

HasApplicationOwner returns a boolean if a field has been set.

### GetItApplicationOwner

`func (o *Slimdiscoveredapplications) GetItApplicationOwner() []string`

GetItApplicationOwner returns the ItApplicationOwner field if non-nil, zero value otherwise.

### GetItApplicationOwnerOk

`func (o *Slimdiscoveredapplications) GetItApplicationOwnerOk() (*[]string, bool)`

GetItApplicationOwnerOk returns a tuple with the ItApplicationOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItApplicationOwner

`func (o *Slimdiscoveredapplications) SetItApplicationOwner(v []string)`

SetItApplicationOwner sets ItApplicationOwner field to given value.

### HasItApplicationOwner

`func (o *Slimdiscoveredapplications) HasItApplicationOwner() bool`

HasItApplicationOwner returns a boolean if a field has been set.

### GetBusinessCriticality

`func (o *Slimdiscoveredapplications) GetBusinessCriticality() string`

GetBusinessCriticality returns the BusinessCriticality field if non-nil, zero value otherwise.

### GetBusinessCriticalityOk

`func (o *Slimdiscoveredapplications) GetBusinessCriticalityOk() (*string, bool)`

GetBusinessCriticalityOk returns a tuple with the BusinessCriticality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessCriticality

`func (o *Slimdiscoveredapplications) SetBusinessCriticality(v string)`

SetBusinessCriticality sets BusinessCriticality field to given value.

### HasBusinessCriticality

`func (o *Slimdiscoveredapplications) HasBusinessCriticality() bool`

HasBusinessCriticality returns a boolean if a field has been set.

### GetDataClassification

`func (o *Slimdiscoveredapplications) GetDataClassification() string`

GetDataClassification returns the DataClassification field if non-nil, zero value otherwise.

### GetDataClassificationOk

`func (o *Slimdiscoveredapplications) GetDataClassificationOk() (*string, bool)`

GetDataClassificationOk returns a tuple with the DataClassification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataClassification

`func (o *Slimdiscoveredapplications) SetDataClassification(v string)`

SetDataClassification sets DataClassification field to given value.

### HasDataClassification

`func (o *Slimdiscoveredapplications) HasDataClassification() bool`

HasDataClassification returns a boolean if a field has been set.

### GetBusinessUnit

`func (o *Slimdiscoveredapplications) GetBusinessUnit() string`

GetBusinessUnit returns the BusinessUnit field if non-nil, zero value otherwise.

### GetBusinessUnitOk

`func (o *Slimdiscoveredapplications) GetBusinessUnitOk() (*string, bool)`

GetBusinessUnitOk returns a tuple with the BusinessUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessUnit

`func (o *Slimdiscoveredapplications) SetBusinessUnit(v string)`

SetBusinessUnit sets BusinessUnit field to given value.

### HasBusinessUnit

`func (o *Slimdiscoveredapplications) HasBusinessUnit() bool`

HasBusinessUnit returns a boolean if a field has been set.

### GetInstallType

`func (o *Slimdiscoveredapplications) GetInstallType() string`

GetInstallType returns the InstallType field if non-nil, zero value otherwise.

### GetInstallTypeOk

`func (o *Slimdiscoveredapplications) GetInstallTypeOk() (*string, bool)`

GetInstallTypeOk returns a tuple with the InstallType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallType

`func (o *Slimdiscoveredapplications) SetInstallType(v string)`

SetInstallType sets InstallType field to given value.

### HasInstallType

`func (o *Slimdiscoveredapplications) HasInstallType() bool`

HasInstallType returns a boolean if a field has been set.

### GetEnvironment

`func (o *Slimdiscoveredapplications) GetEnvironment() string`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *Slimdiscoveredapplications) GetEnvironmentOk() (*string, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *Slimdiscoveredapplications) SetEnvironment(v string)`

SetEnvironment sets Environment field to given value.

### HasEnvironment

`func (o *Slimdiscoveredapplications) HasEnvironment() bool`

HasEnvironment returns a boolean if a field has been set.

### GetRiskScore

`func (o *Slimdiscoveredapplications) GetRiskScore() int32`

GetRiskScore returns the RiskScore field if non-nil, zero value otherwise.

### GetRiskScoreOk

`func (o *Slimdiscoveredapplications) GetRiskScoreOk() (*int32, bool)`

GetRiskScoreOk returns a tuple with the RiskScore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskScore

`func (o *Slimdiscoveredapplications) SetRiskScore(v int32)`

SetRiskScore sets RiskScore field to given value.

### HasRiskScore

`func (o *Slimdiscoveredapplications) HasRiskScore() bool`

HasRiskScore returns a boolean if a field has been set.

### GetIsBusiness

`func (o *Slimdiscoveredapplications) GetIsBusiness() bool`

GetIsBusiness returns the IsBusiness field if non-nil, zero value otherwise.

### GetIsBusinessOk

`func (o *Slimdiscoveredapplications) GetIsBusinessOk() (*bool, bool)`

GetIsBusinessOk returns a tuple with the IsBusiness field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsBusiness

`func (o *Slimdiscoveredapplications) SetIsBusiness(v bool)`

SetIsBusiness sets IsBusiness field to given value.

### HasIsBusiness

`func (o *Slimdiscoveredapplications) HasIsBusiness() bool`

HasIsBusiness returns a boolean if a field has been set.

### GetTotalSigninsCount

`func (o *Slimdiscoveredapplications) GetTotalSigninsCount() int32`

GetTotalSigninsCount returns the TotalSigninsCount field if non-nil, zero value otherwise.

### GetTotalSigninsCountOk

`func (o *Slimdiscoveredapplications) GetTotalSigninsCountOk() (*int32, bool)`

GetTotalSigninsCountOk returns a tuple with the TotalSigninsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSigninsCount

`func (o *Slimdiscoveredapplications) SetTotalSigninsCount(v int32)`

SetTotalSigninsCount sets TotalSigninsCount field to given value.

### HasTotalSigninsCount

`func (o *Slimdiscoveredapplications) HasTotalSigninsCount() bool`

HasTotalSigninsCount returns a boolean if a field has been set.

### GetRiskLevel

`func (o *Slimdiscoveredapplications) GetRiskLevel() string`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *Slimdiscoveredapplications) GetRiskLevelOk() (*string, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *Slimdiscoveredapplications) SetRiskLevel(v string)`

SetRiskLevel sets RiskLevel field to given value.

### HasRiskLevel

`func (o *Slimdiscoveredapplications) HasRiskLevel() bool`

HasRiskLevel returns a boolean if a field has been set.

### GetIsPrivileged

`func (o *Slimdiscoveredapplications) GetIsPrivileged() bool`

GetIsPrivileged returns the IsPrivileged field if non-nil, zero value otherwise.

### GetIsPrivilegedOk

`func (o *Slimdiscoveredapplications) GetIsPrivilegedOk() (*bool, bool)`

GetIsPrivilegedOk returns a tuple with the IsPrivileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPrivileged

`func (o *Slimdiscoveredapplications) SetIsPrivileged(v bool)`

SetIsPrivileged sets IsPrivileged field to given value.

### HasIsPrivileged

`func (o *Slimdiscoveredapplications) HasIsPrivileged() bool`

HasIsPrivileged returns a boolean if a field has been set.

### GetWarrantyExpiration

`func (o *Slimdiscoveredapplications) GetWarrantyExpiration() string`

GetWarrantyExpiration returns the WarrantyExpiration field if non-nil, zero value otherwise.

### GetWarrantyExpirationOk

`func (o *Slimdiscoveredapplications) GetWarrantyExpirationOk() (*string, bool)`

GetWarrantyExpirationOk returns a tuple with the WarrantyExpiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarrantyExpiration

`func (o *Slimdiscoveredapplications) SetWarrantyExpiration(v string)`

SetWarrantyExpiration sets WarrantyExpiration field to given value.

### HasWarrantyExpiration

`func (o *Slimdiscoveredapplications) HasWarrantyExpiration() bool`

HasWarrantyExpiration returns a boolean if a field has been set.

### GetAttributes

`func (o *Slimdiscoveredapplications) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Slimdiscoveredapplications) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Slimdiscoveredapplications) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Slimdiscoveredapplications) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


