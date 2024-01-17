import React from 'react';
import styles from './styles.module.css';
import ChangeLogRecord from '../ChangeLogRecord';
import BounceLoader from 'react-spinners/BounceLoader';
const changeset = {
  "January 12th, 2024": [
      {
          "changeDate": "2024-01-12",
          "attributes": {
              "path": "/access-request-approvals/pending",
              "level": 2,
              "operationId": "listPendingApprovals",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/requesterComment/author' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-pending-approvals"
          },
          "dynamoId": "3be47f99-0b00-47e4-bdb9-8ba9b1172ab8",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-12",
          "attributes": {
              "path": "/access-request-approvals/pending",
              "level": 2,
              "operationId": "listPendingApprovals",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/previousReviewersComments/items/author' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-pending-approvals"
          },
          "dynamoId": "0445a6e0-8abb-434e-91a5-609379c51882",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-12",
          "attributes": {
              "path": "/access-request-approvals/completed",
              "level": 2,
              "operationId": "listCompletedApprovals",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/requesterComment/author' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-completed-approvals"
          },
          "dynamoId": "37199581-ee71-42d2-a340-b2661b7e6cba",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-12",
          "attributes": {
              "path": "/access-request-approvals/{approvalId}/reject",
              "level": 2,
              "operationId": "rejectAccessRequest",
              "section": "paths",
              "id": "request-property-removed",
              "text": "removed the request property 'author'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/reject-access-request"
          },
          "dynamoId": "bfd12eb0-8cfa-491f-9e83-69402456e355",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-12",
          "attributes": {
              "path": "/access-request-approvals/{approvalId}/approve",
              "level": 2,
              "operationId": "approveAccessRequest",
              "section": "paths",
              "id": "request-property-removed",
              "text": "removed the request property 'author'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/approve-access-request"
          },
          "dynamoId": "41229951-d2a3-40ed-893f-3b0d42449190",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-12",
          "attributes": {
              "path": "/access-request-approvals/pending",
              "level": 2,
              "operationId": "listPendingApprovals",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/previousReviewersComments/items/author' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-pending-approvals"
          },
          "dynamoId": "016f954f-bc54-467b-8d92-302b4ea1a057",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-12",
          "attributes": {
              "path": "/access-request-approvals/completed",
              "level": 2,
              "operationId": "listCompletedApprovals",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/previousReviewersComments/items/author' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-completed-approvals"
          },
          "dynamoId": "fba1e2f9-0462-4024-b683-90a85ea727eb",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-12",
          "attributes": {
              "path": "/access-request-approvals/completed",
              "level": 2,
              "operationId": "listCompletedApprovals",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/reviewerComment/allOf[./CommentDto.yaml]/author' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-completed-approvals"
          },
          "dynamoId": "ecd417cf-ad0b-47bc-842b-316653f99f05",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-12",
          "attributes": {
              "path": "/access-request-approvals/pending",
              "level": 2,
              "operationId": "listPendingApprovals",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/requesterComment/author' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-pending-approvals"
          },
          "dynamoId": "b58b409e-772b-44c4-bf84-f4ccfddd7bf0",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-12",
          "attributes": {
              "path": "/access-request-status",
              "level": 2,
              "operationId": "listAccessRequestStatus",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/requesterComment/author' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-access-request-status"
          },
          "dynamoId": "a354ea97-5d94-4b59-b01d-1cb379179af8",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-12",
          "attributes": {
              "path": "/access-request-status",
              "level": 2,
              "operationId": "listAccessRequestStatus",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/requesterComment/author' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-access-request-status"
          },
          "dynamoId": "3cc7c329-ff55-45aa-b11c-89970f98987a",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-12",
          "attributes": {
              "path": "/access-request-approvals/completed",
              "level": 2,
              "operationId": "listCompletedApprovals",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/requesterComment/author' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-completed-approvals"
          },
          "dynamoId": "202df51c-4691-4a75-8e25-5de120a896c9",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-12",
          "attributes": {
              "path": "/access-request-approvals/completed",
              "level": 2,
              "operationId": "listCompletedApprovals",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/previousReviewersComments/items/author' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-completed-approvals"
          },
          "dynamoId": "0678411f-576a-421d-8c06-42d685a86ecb",
          "version": "beta",
          "changeType": "Deletion"
      }
  ],
  "January 9th, 2024": [
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/search/{index}/{id}",
              "level": 1,
              "operationId": "searchGet",
              "section": "paths",
              "id": "api-security-added",
              "text": "the endpoint scheme security 'UserContextAuth' was added to the API",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/search-get"
          },
          "dynamoId": "70c9f6d8-fc11-4ae0-8141-724d80742e8c",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/saved-searches",
              "level": 1,
              "operationId": "listSavedSearches",
              "section": "paths",
              "id": "response-non-success-status-added",
              "text": "added the non-success response with the status '500'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-saved-searches"
          },
          "dynamoId": "5ceef515-45d6-458b-849e-7d2e7bf7c692",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/saved-searches",
              "level": 2,
              "operationId": "createSavedSearch",
              "section": "paths",
              "id": "request-property-removed",
              "text": "removed the request property '/allOf[../schemas/search/saved/SavedSearchDetail.yaml]/public'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-saved-search"
          },
          "dynamoId": "dcfaccca-1868-4123-b98b-3023fa5bd66e",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/saved-searches",
              "level": 1,
              "operationId": "createSavedSearch",
              "section": "paths",
              "id": "response-non-success-status-added",
              "text": "added the non-success response with the status '401'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-saved-search"
          },
          "dynamoId": "eac2a512-d2d5-4517-88eb-08a6523f20ad",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/search/aggregate",
              "level": 1,
              "operationId": "searchAggregate",
              "section": "paths",
              "id": "api-security-added",
              "text": "the endpoint scheme security 'UserContextAuth' was added to the API",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/search-aggregate"
          },
          "dynamoId": "b47d8990-6841-4589-885e-f393a9750b94",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/saved-searches/{id}",
              "level": 2,
              "operationId": "putSavedSearch",
              "section": "paths",
              "id": "request-property-removed",
              "text": "removed the request property '/allOf[SavedSearchDetail.yaml]/public'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PUT",
              "url": "https://developer.sailpoint.com/idn/api/v3/put-saved-search"
          },
          "dynamoId": "6353818c-c89d-478b-bd05-0a6c675f83c9",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/saved-searches",
              "level": 1,
              "operationId": "createSavedSearch",
              "section": "paths",
              "id": "api-security-added",
              "text": "the endpoint scheme security 'UserContextAuth' was added to the API",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-saved-search"
          },
          "dynamoId": "145536fa-0839-4c0e-b76d-9fd81bcf0a16",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/saved-searches",
              "level": 2,
              "operationId": "createSavedSearch",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/allOf[SavedSearchDetail.yaml]/public' from the response with the '201' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-saved-search"
          },
          "dynamoId": "abf3c247-f756-429d-a414-bbc9e6cd4c7c",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/saved-searches",
              "level": 1,
              "operationId": "createSavedSearch",
              "section": "paths",
              "id": "response-non-success-status-added",
              "text": "added the non-success response with the status '500'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-saved-search"
          },
          "dynamoId": "faf7964d-6d41-4fe5-98df-0038119c26ba",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/saved-searches/{id}",
              "level": 2,
              "operationId": "getSavedSearch",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/allOf[SavedSearchDetail.yaml]/public' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-saved-search"
          },
          "dynamoId": "a212f815-cad9-476f-b6f4-f6d92473583f",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/saved-searches",
              "level": 1,
              "operationId": "createSavedSearch",
              "section": "paths",
              "id": "response-non-success-status-added",
              "text": "added the non-success response with the status '429'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-saved-search"
          },
          "dynamoId": "49c83b33-f3cf-4038-8663-932345b9acc9",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/saved-searches",
              "level": 1,
              "operationId": "listSavedSearches",
              "section": "paths",
              "id": "response-non-success-status-added",
              "text": "added the non-success response with the status '429'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-saved-searches"
          },
          "dynamoId": "7fa94337-857c-41f5-acdf-53274941fb8d",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/saved-searches",
              "level": 2,
              "operationId": "listSavedSearches",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/allOf[SavedSearchDetail.yaml]/public' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-saved-searches"
          },
          "dynamoId": "c8b74f68-18a0-472d-973d-df01dbbaacf9",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/saved-searches",
              "level": 1,
              "operationId": "listSavedSearches",
              "section": "paths",
              "id": "api-security-added",
              "text": "the endpoint scheme security 'UserContextAuth' was added to the API",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-saved-searches"
          },
          "dynamoId": "fdce7a1c-74f0-49ea-9c54-6631ad31a0b2",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/search/count",
              "level": 1,
              "operationId": "searchCount",
              "section": "paths",
              "id": "api-security-added",
              "text": "the endpoint scheme security 'UserContextAuth' was added to the API",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/search-count"
          },
          "dynamoId": "917e1438-541a-4b9a-92de-7b067d7db6d5",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/saved-searches",
              "level": 1,
              "operationId": "listSavedSearches",
              "section": "paths",
              "id": "response-non-success-status-added",
              "text": "added the non-success response with the status '401'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-saved-searches"
          },
          "dynamoId": "349352ba-fc4c-4e2d-949d-8557f7364d41",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-09",
          "attributes": {
              "path": "/saved-searches/{id}",
              "level": 2,
              "operationId": "putSavedSearch",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/allOf[SavedSearchDetail.yaml]/public' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PUT",
              "url": "https://developer.sailpoint.com/idn/api/v3/put-saved-search"
          },
          "dynamoId": "d612ef74-2c6a-4aab-8ac1-ee8272d8f675",
          "version": "v3",
          "changeType": "Deletion"
      }
  ],
  "January 8th, 2024": [
      {
          "changeDate": "2024-01-08",
          "attributes": {
              "path": "/campaign-filters/{id}",
              "level": 1,
              "operationId": "updateCampaignFilter",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''INVALID_CERTIFIABLE_BUNDLE'' enum value from the 'criteriaList/items/type' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/update-campaign-filter"
          },
          "dynamoId": "41ef31b3-9efa-4cbf-9f2e-b0b4a9422532",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-08",
          "attributes": {
              "path": "/campaign-filters/{id}",
              "level": 1,
              "operationId": "getCampaignFilterById",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''INVALID_CERTIFIABLE_ENTITY'' enum value from the '/items/criteriaList/items/type' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-campaign-filter-by-id"
          },
          "dynamoId": "b9ed5970-43b1-4a45-a13f-e0895d5316db",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-08",
          "attributes": {
              "path": "/campaign-filters",
              "level": 1,
              "operationId": "createCampaignFilter",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''INVALID_CERTIFIABLE_BUNDLE'' enum value from the 'criteriaList/items/type' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-campaign-filter"
          },
          "dynamoId": "bb793d0c-4fc4-4580-b6c9-be2ba53680e0",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-08",
          "attributes": {
              "path": "/campaign-filters/{id}",
              "level": 3,
              "operationId": "updateCampaignFilter",
              "section": "paths",
              "id": "request-property-enum-value-removed",
              "text": "removed the enum value 'INVALID_CERTIFIABLE_ENTITY' of the request property 'criteriaList/items/type'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/update-campaign-filter"
          },
          "dynamoId": "62ce0535-4867-4393-959a-99e9e8ab94a2",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-08",
          "attributes": {
              "path": "/campaign-filters",
              "level": 3,
              "operationId": "createCampaignFilter",
              "section": "paths",
              "id": "request-property-enum-value-removed",
              "text": "removed the enum value 'INVALID_CERTIFIABLE_BUNDLE' of the request property 'criteriaList/items/type'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-campaign-filter"
          },
          "dynamoId": "3e4933e5-6897-4d56-b10b-1019a033f497",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-08",
          "attributes": {
              "path": "/campaign-filters",
              "level": 1,
              "operationId": "listCampaignFilters",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''INVALID_CERTIFIABLE_ENTITY'' enum value from the '/items/criteriaList/items/type' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-campaign-filters"
          },
          "dynamoId": "8d8ca38e-3901-4581-a264-d2cafb5f5e55",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-08",
          "attributes": {
              "path": "/campaign-filters",
              "level": 1,
              "operationId": "createCampaignFilter",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''INVALID_CERTIFIABLE_ENTITY'' enum value from the 'criteriaList/items/type' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-campaign-filter"
          },
          "dynamoId": "32b48fed-2b76-4a04-97bb-cca2f0d99e0a",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-08",
          "attributes": {
              "path": "/campaign-filters",
              "level": 3,
              "operationId": "createCampaignFilter",
              "section": "paths",
              "id": "request-property-enum-value-removed",
              "text": "removed the enum value 'INVALID_CERTIFIABLE_ENTITY' of the request property 'criteriaList/items/type'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-campaign-filter"
          },
          "dynamoId": "21fe22e8-2cb0-423c-92ac-8a66ba169516",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-08",
          "attributes": {
              "path": "/campaign-filters/{id}",
              "level": 1,
              "operationId": "updateCampaignFilter",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''INVALID_CERTIFIABLE_ENTITY'' enum value from the 'criteriaList/items/type' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/update-campaign-filter"
          },
          "dynamoId": "4211569c-cc26-41f7-a90a-b7dffe3daa90",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-08",
          "attributes": {
              "path": "/campaign-filters",
              "level": 1,
              "operationId": "listCampaignFilters",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''INVALID_CERTIFIABLE_BUNDLE'' enum value from the '/items/criteriaList/items/type' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-campaign-filters"
          },
          "dynamoId": "107836c1-11d6-4e24-b5ba-3c2d76e4d377",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-08",
          "attributes": {
              "path": "/campaign-filters/{id}",
              "level": 3,
              "operationId": "updateCampaignFilter",
              "section": "paths",
              "id": "request-property-enum-value-removed",
              "text": "removed the enum value 'INVALID_CERTIFIABLE_BUNDLE' of the request property 'criteriaList/items/type'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/update-campaign-filter"
          },
          "dynamoId": "177486b1-f4d4-444b-92e2-f8e637704a28",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-08",
          "attributes": {
              "path": "/campaign-filters/{id}",
              "level": 1,
              "operationId": "getCampaignFilterById",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''INVALID_CERTIFIABLE_BUNDLE'' enum value from the '/items/criteriaList/items/type' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-campaign-filter-by-id"
          },
          "dynamoId": "fb9bc383-840b-45b6-b1c4-074150cc2e48",
          "version": "v3",
          "changeType": "Deletion"
      }
  ],
  "January 4th, 2024": [
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 2,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property 'revocationRequestConfig/denialCommentsRequired' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/v3/patch-access-profile"
          },
          "dynamoId": "cfbc4e6c-3676-4e0f-8757-38ba3ab563bd",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'commentsRequired' response's property default value 'false' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-access-profile"
          },
          "dynamoId": "916809af-6de4-4b03-95dd-3e8c17ddac72",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/v3/patch-access-profile"
          },
          "dynamoId": "a7f2c5ae-98a4-40c7-965a-06a7ee19747b",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-default-value-added",
              "text": "the 'denialCommentsRequired' request property default value 'false' was added",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "c76ee97c-2945-4de6-9292-54493f4b6836",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles",
              "level": 1,
              "operationId": "createRole",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''APP_OWNER'' enum value from the 'revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '201'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-role"
          },
          "dynamoId": "fc8d1764-c132-4ec1-8f5a-8c5bbe71de9d",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/commentsRequired' became nullable for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "4025f3a7-4c3e-465b-982c-99042d76b615",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 2,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/revocationRequestConfig/commentsRequired' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-access-profiles"
          },
          "dynamoId": "c377d54b-4443-4bac-9515-5f73b2fcc1d9",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-default-value-added",
              "text": "the 'commentsRequired' request property default value 'false' was added",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "60d30276-7cbd-4927-abe8-6a98ea90bc19",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 2,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property 'revocationRequestConfig/denialCommentsRequired' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/beta/patch-access-profile"
          },
          "dynamoId": "b29e6dcd-8de2-471c-90e0-071425f786f9",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 2,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-removed",
              "text": "removed the request property 'revocationRequestConfig/commentsRequired'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "f42e60b6-d66e-4e4f-948e-b90bbacbe951",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'revocationRequestConfig/approvalSchemes' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/beta/patch-access-profile"
          },
          "dynamoId": "9e9cde8d-3b4b-495f-ba8e-d8d69ee792f9",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'revocationRequestConfig' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-access-profile"
          },
          "dynamoId": "94f093a1-2a6e-4ee6-96c2-bedcb4c2f6bd",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 2,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-removed",
              "text": "removed the request property 'revocationRequestConfig/commentsRequired'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "0ffe888a-89c2-4c9e-b1aa-678386aec6cc",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property '/items/accessRequestConfig/commentsRequired' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-access-profiles"
          },
          "dynamoId": "85f8fb16-f3f5-48a9-8334-b9cd8c293726",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'requestable' response's property default value 'true' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/beta/patch-access-profile"
          },
          "dynamoId": "fef8ae7a-ad74-4089-a0f0-27a0fb7d2bd2",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'enabled' response's property default value 'true' was added for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "9506d22b-6c70-4f00-9b30-9340ff03f202",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/beta/patch-access-profile"
          },
          "dynamoId": "589e4f65-e528-4a3d-9211-1953f598970c",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/approvalSchemes' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-access-profile"
          },
          "dynamoId": "7b077dfa-6c6b-4200-97f5-728d8643b070",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-became-nullable",
              "text": "the request property 'revocationRequestConfig' became nullable",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "2ea5e8af-e4cc-4511-8b54-9f4afccb60fb",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/denialCommentsRequired' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/v3/patch-access-profile"
          },
          "dynamoId": "2533d427-b02d-4488-95f9-937cb37c3330",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles",
              "level": 1,
              "operationId": "listRoles",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''APP_OWNER'' enum value from the '/items/revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-roles"
          },
          "dynamoId": "f0b75f40-1b3c-4eae-ab01-ce817a72d731",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/approvalSchemes' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/beta/patch-access-profile"
          },
          "dynamoId": "2545f070-72e5-4e48-8590-268b1f4745b4",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-access-profile"
          },
          "dynamoId": "6dc3695b-27f6-4ce4-aa8d-b3bde240c6de",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles/{id}",
              "level": 1,
              "operationId": "patchRole",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''APP_OWNER'' enum value from the 'revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/v3/patch-role"
          },
          "dynamoId": "d66dca29-84ce-4491-b08d-552f9f7f4822",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-default-value-added",
              "text": "the 'requestable' request property default value 'true' was added",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "51197662-13e7-4098-884f-e638672fc721",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-default-value-added",
              "text": "the 'denialCommentsRequired' request property default value 'false' was added",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "31bb4696-c1ad-4e07-a4d4-69dc20188c1f",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'commentsRequired' response's property default value 'false' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/beta/patch-access-profile"
          },
          "dynamoId": "47b74040-12ee-4fc5-bc20-91a46b7dded2",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property '/items/accessRequestConfig' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-access-profiles"
          },
          "dynamoId": "785fbf57-c288-4ed1-8517-228261a6025e",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property '/items/revocationRequestConfig/approvalSchemes' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-access-profiles"
          },
          "dynamoId": "66d927b6-ed5f-40ad-8adb-794615adc2a7",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 2,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property 'revocationRequestConfig/denialCommentsRequired' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-access-profile"
          },
          "dynamoId": "2d5cf3d7-2900-4b14-8b01-d5962075c0a4",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property '/items/accessRequestConfig/denialCommentsRequired' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-access-profiles"
          },
          "dynamoId": "b8e6ba2a-0f28-4008-ade5-0a817f66a939",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/denialCommentsRequired' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-access-profile"
          },
          "dynamoId": "910c014a-561f-4317-9937-a66f6d3ef2d6",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles/{id}",
              "level": 1,
              "operationId": "getRole",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''APP_OWNER'' enum value from the 'revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-role"
          },
          "dynamoId": "9880e156-5856-4959-93ea-d9987e54e6a4",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property '/items/accessRequestConfig/commentsRequired' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-access-profiles"
          },
          "dynamoId": "7f77017e-5051-4eda-ad52-e4d9fc770cab",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'enabled' response's property default value 'true' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/beta/patch-access-profile"
          },
          "dynamoId": "62436f45-e35e-46e4-ab93-976cfecffeb8",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property '/items/accessRequestConfig/denialCommentsRequired' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-access-profiles"
          },
          "dynamoId": "4ca278e4-3e02-498f-a410-df3d8aa0c157",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'requestable' response's property default value 'true' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-access-profile"
          },
          "dynamoId": "5ad9b724-aa6f-4de9-8792-7eb0cb6a1863",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 2,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property 'revocationRequestConfig/denialCommentsRequired' from the response with the '201' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "c7e4a5b0-880c-4536-b6a4-befa45a2dc8d",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'denialCommentsRequired' response's property default value 'false' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-access-profile"
          },
          "dynamoId": "388abe78-af43-4b53-b35a-5c9531f7d5eb",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'revocationRequestConfig/approvalSchemes' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-access-profile"
          },
          "dynamoId": "1913a882-ecb0-4b0e-9431-5c1e86e440a4",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-default-value-added",
              "text": "the 'requestable' request property default value 'true' was added",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "399d00a0-dc49-4c02-b61f-e9fbd1c291f7",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 2,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property 'revocationRequestConfig/commentsRequired' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-access-profile"
          },
          "dynamoId": "2ed2a593-d933-415c-a6c3-b65e91a56080",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'denialCommentsRequired' response's property default value 'false' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/beta/patch-access-profile"
          },
          "dynamoId": "ac06859c-4fd3-464d-b78c-63cc4415cf23",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles",
              "level": 1,
              "operationId": "createRole",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''SOURCE_OWNER'' enum value from the 'revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '201'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-role"
          },
          "dynamoId": "d10a7173-1f94-4e67-b221-69e4459d2e25",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'enabled' response's property default value 'true' was added for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "9696d83d-1dba-4443-9ee6-4dc912cfc803",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'revocationRequestConfig' became nullable for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "a575c309-e0be-429e-aabf-a9bee9ccd60c",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'commentsRequired' response's property default value 'false' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-access-profiles"
          },
          "dynamoId": "c9b93c7e-299c-422c-bf90-53f5424babc4",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-became-nullable",
              "text": "the request property 'revocationRequestConfig/approvalSchemes' became nullable",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "0986515d-2079-4027-9a25-3bbfa05d9a9a",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles/{id}",
              "level": 1,
              "operationId": "getRole",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''SOURCE_OWNER'' enum value from the 'revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-role"
          },
          "dynamoId": "729389be-76c2-4d28-af0b-ff5d6c476161",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property '/items/revocationRequestConfig/approvalSchemes' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-access-profiles"
          },
          "dynamoId": "21629b89-2ef1-4ee6-9cde-7cc35ee39d95",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles",
              "level": 1,
              "operationId": "createRole",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''SOURCE_OWNER'' enum value from the 'revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '201'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-role"
          },
          "dynamoId": "ae3e2ff4-07d3-473f-a8ff-b6a356f427dd",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'commentsRequired' response's property default value 'false' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-access-profiles"
          },
          "dynamoId": "a3b818c3-6b79-43ed-a46b-05b176c4e349",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'enabled' response's property default value 'true' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-access-profiles"
          },
          "dynamoId": "32356939-102c-4a58-81e7-b0f6554a7094",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-access-profile"
          },
          "dynamoId": "d4a80978-1b06-4375-bcb6-b4f8856c336e",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-became-nullable",
              "text": "the request property 'accessRequestConfig/denialCommentsRequired' became nullable",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "d46b495e-e248-4ee1-a95a-02a9c3462b4f",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-became-nullable",
              "text": "the request property 'revocationRequestConfig' became nullable",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "98b4ed14-0b7b-49a2-80d8-5c34c41ef300",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'enabled' response's property default value 'true' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-access-profiles"
          },
          "dynamoId": "db6d45d2-ba9f-4d9c-be1d-78cba95af3f6",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-default-value-added",
              "text": "the 'enabled' request property default value 'true' was added",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "cbf0c584-a87d-4093-a578-e0ed253c2089",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles",
              "level": 3,
              "operationId": "createRole",
              "section": "paths",
              "id": "request-property-enum-value-removed",
              "text": "removed the enum value 'SOURCE_OWNER' of the request property 'revocationRequestConfig/approvalSchemes/items/approverType'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-role"
          },
          "dynamoId": "96c7848d-a9c9-4547-9e11-ae46e8d15774",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles/{id}",
              "level": 1,
              "operationId": "getRole",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''APP_OWNER'' enum value from the 'revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-role"
          },
          "dynamoId": "b6915903-70ae-4c6c-898c-f822aeb62a2f",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-became-nullable",
              "text": "the request property 'accessRequestConfig' became nullable",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "73356e90-ef5b-4ea0-871c-0a19a9eccc63",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'revocationRequestConfig' became nullable for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "2c02e361-a798-4961-ab54-e8eeebc98d33",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'denialCommentsRequired' response's property default value 'false' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/v3/patch-access-profile"
          },
          "dynamoId": "ef111b43-752b-4934-9a63-dbecc7e28b8c",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles/{id}",
              "level": 1,
              "operationId": "patchRole",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''SOURCE_OWNER'' enum value from the 'revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/v3/patch-role"
          },
          "dynamoId": "39c4d870-f147-43ab-834d-697840e7f89b",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'denialCommentsRequired' response's property default value 'false' was added for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "f9ef96be-71d4-411d-8939-465cd5dcc3f4",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/commentsRequired' became nullable for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "1fcc4781-2ad5-4af9-bb7c-ad571217d7b6",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-default-value-added",
              "text": "the 'commentsRequired' request property default value 'false' was added",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "0cefcc0e-04ba-43b9-bdad-124e7b2e6804",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property '/items/accessRequestConfig/approvalSchemes' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-access-profiles"
          },
          "dynamoId": "9d7bae57-e652-45b9-a60d-1a0088007ba8",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'revocationRequestConfig/approvalSchemes' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/v3/patch-access-profile"
          },
          "dynamoId": "544ce4d6-ccc3-49b2-a736-0cbc6fd57b26",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/approvalSchemes' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/v3/patch-access-profile"
          },
          "dynamoId": "3e53fc99-f580-4ac5-9105-7addbd1a3047",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-became-nullable",
              "text": "the request property 'accessRequestConfig/approvalSchemes' became nullable",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "d2bde283-bbdc-46bd-b3d3-fe7f9efa5443",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 2,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property 'revocationRequestConfig/denialCommentsRequired' from the response with the '201' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "4137ec4e-de03-4985-8ef1-07d1df41e002",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles",
              "level": 1,
              "operationId": "listRoles",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''APP_OWNER'' enum value from the '/items/revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-roles"
          },
          "dynamoId": "9e1dd1ba-a9cd-44b0-b6f6-0ac84144ca56",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'requestable' response's property default value 'true' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-access-profile"
          },
          "dynamoId": "9fc3601e-059b-4791-9910-561d5c399b07",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles",
              "level": 3,
              "operationId": "createRole",
              "section": "paths",
              "id": "request-property-enum-value-removed",
              "text": "removed the enum value 'APP_OWNER' of the request property 'revocationRequestConfig/approvalSchemes/items/approverType'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-role"
          },
          "dynamoId": "8d688833-660a-4976-bec0-975b0fcb56da",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'requestable' response's property default value 'true' was added for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "faa562c4-68a9-4b44-b86e-b2a6046d2f66",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-became-nullable",
              "text": "the request property 'accessRequestConfig/commentsRequired' became nullable",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "21d89aee-8cb8-4145-b42d-c84a3bf0734b",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles/{id}",
              "level": 1,
              "operationId": "getRole",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''SOURCE_OWNER'' enum value from the 'revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-role"
          },
          "dynamoId": "32591b9f-e245-4867-a752-198d668c6089",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-became-nullable",
              "text": "the request property 'accessRequestConfig' became nullable",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "28fcc713-cd28-43ed-ba4f-6428719e663c",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/denialCommentsRequired' became nullable for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "daa51376-54d1-40ed-a8b0-9abdcbd04185",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles",
              "level": 1,
              "operationId": "createRole",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''APP_OWNER'' enum value from the 'revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '201'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-role"
          },
          "dynamoId": "d070d508-e28f-4288-b865-570dafb1221d",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'denialCommentsRequired' response's property default value 'false' was added for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "59da5936-7d21-4017-a9fc-99ba2b8473ba",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles/{id}",
              "level": 1,
              "operationId": "patchRole",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''SOURCE_OWNER'' enum value from the 'revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/beta/patch-role"
          },
          "dynamoId": "33f020e7-e7f2-4c45-aac7-d75cc8b37fc2",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles",
              "level": 1,
              "operationId": "listRoles",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''SOURCE_OWNER'' enum value from the '/items/revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-roles"
          },
          "dynamoId": "6afc427f-ee6a-4819-bf2b-6cd38bd9a220",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'denialCommentsRequired' response's property default value 'false' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-access-profiles"
          },
          "dynamoId": "0b1c633e-0f61-4374-a2eb-eaca9fb56a3d",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'commentsRequired' response's property default value 'false' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/v3/patch-access-profile"
          },
          "dynamoId": "e39c7f10-33d1-49cb-b32a-d9b483cbe494",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 2,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/revocationRequestConfig/commentsRequired' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-access-profiles"
          },
          "dynamoId": "1c39f96a-0cdd-49fe-bee7-079662693971",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'enabled' response's property default value 'true' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/v3/patch-access-profile"
          },
          "dynamoId": "3bfea3dd-4c3c-4950-b49a-c3890332ba6a",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 2,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property 'revocationRequestConfig/commentsRequired' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/beta/patch-access-profile"
          },
          "dynamoId": "df7f4c32-5a72-49e1-950a-317f7224b13c",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'commentsRequired' response's property default value 'false' was added for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "75ff60c8-ff70-4507-a68f-d7590d56f701",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 2,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-removed",
              "text": "removed the request property 'revocationRequestConfig/denialCommentsRequired'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "c8b2bd44-ceb5-4383-8a7c-abb8d6ed9b2b",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'revocationRequestConfig/approvalSchemes' became nullable for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "b18638e9-8171-4fa8-b3e7-059f562a8deb",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/commentsRequired' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-access-profile"
          },
          "dynamoId": "ea4ee153-b7b2-40c0-986f-b6f69460c41e",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'revocationRequestConfig' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-access-profile"
          },
          "dynamoId": "54682989-b3f6-4030-a70e-7a5943d9316b",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'denialCommentsRequired' response's property default value 'false' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-access-profiles"
          },
          "dynamoId": "a23adfef-2c2a-404f-a195-0be2d870d4bf",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'commentsRequired' response's property default value 'false' was added for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "92af85c0-2f37-4c05-a862-0e9c20747502",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/approvalSchemes' became nullable for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "3659a0b8-948b-48b7-91a6-dbf42e9dae4c",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'requestable' response's property default value 'true' was added for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "ece2bacc-ee97-4d6b-8a7c-8081e0f16689",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 2,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property 'revocationRequestConfig/commentsRequired' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/v3/patch-access-profile"
          },
          "dynamoId": "4201212c-b8fd-4341-b60a-699bdcef6f96",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property '/items/accessRequestConfig' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-access-profiles"
          },
          "dynamoId": "ce4fcbaf-5da1-4ac4-8302-c0856362b7a4",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'revocationRequestConfig/approvalSchemes' became nullable for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "b1cc0d0f-2942-4668-9b64-9afc96706d4a",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/commentsRequired' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/beta/patch-access-profile"
          },
          "dynamoId": "167960e8-33cf-4e33-9997-1c1d05ed4cb1",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 2,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-removed",
              "text": "removed the request property 'revocationRequestConfig/denialCommentsRequired'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "8d6a686b-c9e4-4b69-bed9-3ca822d0a6ff",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'denialCommentsRequired' response's property default value 'false' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-access-profile"
          },
          "dynamoId": "09a1bb86-a877-4c31-8fde-8e254a681d6d",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property '/items/revocationRequestConfig' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-access-profiles"
          },
          "dynamoId": "f3f0d4a6-346b-4d9d-84e1-f42297861cff",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property '/items/revocationRequestConfig' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-access-profiles"
          },
          "dynamoId": "9edc5eec-18d8-4a19-9da9-bd1261cae0f2",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/approvalSchemes' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-access-profile"
          },
          "dynamoId": "d55f7250-c081-416b-be32-d9dea09d8464",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 2,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property 'revocationRequestConfig/commentsRequired' from the response with the '201' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "ebc61677-0b98-4aee-b202-94828a498202",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'requestable' response's property default value 'true' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-access-profiles"
          },
          "dynamoId": "a60d1f29-e79a-4d40-a96d-3a940f6b425b",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'requestable' response's property default value 'true' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/v3/patch-access-profile"
          },
          "dynamoId": "31d551d6-6bbd-44c5-bc8d-3248072ed651",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 2,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property 'revocationRequestConfig/commentsRequired' from the response with the '201' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "f16e5c4a-b35f-4e12-8a49-dac7b6f45dda",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles",
              "level": 3,
              "operationId": "createRole",
              "section": "paths",
              "id": "request-property-enum-value-removed",
              "text": "removed the enum value 'APP_OWNER' of the request property 'revocationRequestConfig/approvalSchemes/items/approverType'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-role"
          },
          "dynamoId": "84618377-e23f-44bf-a99e-df31b4e9963c",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-became-nullable",
              "text": "the request property 'accessRequestConfig/commentsRequired' became nullable",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "834b9f93-8a4b-4b29-8af4-6f683f245ecf",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/commentsRequired' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-access-profile"
          },
          "dynamoId": "a13750a8-d453-48b6-8d5f-93ad31b89605",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-default-value-added",
              "text": "the 'enabled' request property default value 'true' was added",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "050318a3-bf2c-46bd-9e7f-03db9f24cfd6",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/approvalSchemes' became nullable for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "a9d6ecd2-e761-4f72-a60b-acea5e3b1873",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'commentsRequired' response's property default value 'false' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-access-profile"
          },
          "dynamoId": "9c088070-915e-4fa2-81bb-fec558cc5254",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/denialCommentsRequired' became nullable for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "fe7150d4-4c84-45ce-8aaa-43c78ac45cbb",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 2,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property 'revocationRequestConfig/denialCommentsRequired' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-access-profile"
          },
          "dynamoId": "80e21c91-5926-48f1-8a94-bc665e5fab3c",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'requestable' response's property default value 'true' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-access-profiles"
          },
          "dynamoId": "b1d89bd0-d5fa-465b-ab8f-d39e63452267",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles",
              "level": 3,
              "operationId": "createRole",
              "section": "paths",
              "id": "request-property-enum-value-removed",
              "text": "removed the enum value 'SOURCE_OWNER' of the request property 'revocationRequestConfig/approvalSchemes/items/approverType'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-role"
          },
          "dynamoId": "a5bebeff-84de-4022-a010-495436ceb1b6",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'enabled' response's property default value 'true' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-access-profile"
          },
          "dynamoId": "9add31ed-4804-4b24-bf11-4e71b946c8a9",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property '/items/accessRequestConfig/approvalSchemes' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-access-profiles"
          },
          "dynamoId": "dba13834-8b0c-4648-a505-ea7867740143",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'revocationRequestConfig' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/beta/patch-access-profile"
          },
          "dynamoId": "d20ca6e1-bac5-4bc4-8fe8-25e3140a873e",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/denialCommentsRequired' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-access-profile"
          },
          "dynamoId": "ea8177f0-3de2-4cbc-b176-a340b2cddba6",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 2,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/revocationRequestConfig/denialCommentsRequired' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-access-profiles"
          },
          "dynamoId": "6ef0a977-4328-4776-b46e-c9300fc2e9ac",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 2,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property 'revocationRequestConfig/commentsRequired' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-access-profile"
          },
          "dynamoId": "4b6e0815-62af-4023-9924-b0c702c20e5c",
          "version": "v3",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-became-nullable",
              "text": "the request property 'accessRequestConfig/approvalSchemes' became nullable",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "d92ac45d-743f-4b86-ac06-d21c92fb7207",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 2,
              "operationId": "listAccessProfiles",
              "section": "paths",
              "id": "response-optional-property-removed",
              "text": "removed the optional property '/items/revocationRequestConfig/denialCommentsRequired' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-access-profiles"
          },
          "dynamoId": "49bc8c18-74dc-4b57-8cef-89cce8f8e068",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-became-nullable",
              "text": "the request property 'revocationRequestConfig/approvalSchemes' became nullable",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "68b25dab-4cc4-4cc1-aa20-57fcc9d5f61e",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig' became nullable for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "51e005dc-3577-4b79-b60d-61ecd8df89c7",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 1,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "request-property-became-nullable",
              "text": "the request property 'accessRequestConfig/denialCommentsRequired' became nullable",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/create-access-profile"
          },
          "dynamoId": "ff011c97-be88-45f4-9e5c-f65dee73ae34",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'revocationRequestConfig' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/v3/patch-access-profile"
          },
          "dynamoId": "0547656f-43cf-4c58-9a13-3aa118bad584",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles/{id}",
              "level": 1,
              "operationId": "patchRole",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''APP_OWNER'' enum value from the 'revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/beta/patch-role"
          },
          "dynamoId": "63b2be1d-b361-4029-bba5-15903a208cba",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 1,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-default-value-added",
              "text": "the 'enabled' response's property default value 'true' was added for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-access-profile"
          },
          "dynamoId": "ec279b36-29a1-4e72-8472-1fc9d6a30267",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/roles",
              "level": 1,
              "operationId": "listRoles",
              "section": "paths",
              "id": "response-property-enum-value-removed",
              "text": "removed the ''SOURCE_OWNER'' enum value from the '/items/revocationRequestConfig/approvalSchemes/items/approverType' response property for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/list-roles"
          },
          "dynamoId": "3c02f4b7-6402-41ae-ae86-c0148f45c419",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles",
              "level": 3,
              "operationId": "createAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig' became nullable for the status '201'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/v3/create-access-profile"
          },
          "dynamoId": "4aed6eaf-38fb-419a-a406-bf30ac85a445",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "getAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'revocationRequestConfig/approvalSchemes' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-access-profile"
          },
          "dynamoId": "4db1eb93-1c13-4ecc-8a3e-a30f01ba487f",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/commentsRequired' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/v3/patch-access-profile"
          },
          "dynamoId": "10c845cc-4be9-4e90-9366-2a1a26390941",
          "version": "v3",
          "changeType": "Change"
      },
      {
          "changeDate": "2024-01-04",
          "attributes": {
              "path": "/access-profiles/{id}",
              "level": 3,
              "operationId": "patchAccessProfile",
              "section": "paths",
              "id": "response-property-became-nullable",
              "text": "the response property 'accessRequestConfig/denialCommentsRequired' became nullable for the status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "PATCH",
              "url": "https://developer.sailpoint.com/idn/api/beta/patch-access-profile"
          },
          "dynamoId": "1db9adc1-a1ed-4d0b-87ca-bc15bacad737",
          "version": "beta",
          "changeType": "Change"
      }
  ],
  "December 20th, 2023": [
      {
          "changeDate": "2023-12-20",
          "attributes": {
              "path": "/accounts",
              "level": 1,
              "operationId": "listAccounts",
              "section": "paths",
              "id": "response-optional-property-added",
              "text": "added the optional property '/items/allOf[#2]/sourceOwner' to the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-accounts"
          },
          "dynamoId": "825910dd-3f1b-47c5-8b33-94d82f3625e2",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2023-12-20",
          "attributes": {
              "path": "/accounts/{id}",
              "level": 1,
              "operationId": "getAccount",
              "section": "paths",
              "id": "response-optional-property-added",
              "text": "added the optional property '/allOf[#2]/identity' to the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-account"
          },
          "dynamoId": "5aa30d03-5d7f-480c-814d-c9377093692a",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2023-12-20",
          "attributes": {
              "path": "/accounts/{id}",
              "level": 1,
              "operationId": "getAccount",
              "section": "paths",
              "id": "response-optional-property-added",
              "text": "added the optional property '/allOf[#2]/sourceOwner' to the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-account"
          },
          "dynamoId": "9ffbb93b-0fe5-4525-8c4f-af7fb9617453",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2023-12-20",
          "attributes": {
              "path": "/accounts",
              "level": 1,
              "operationId": "listAccounts",
              "section": "paths",
              "id": "response-optional-property-added",
              "text": "added the optional property '/items/allOf[#2]/identity' to the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-accounts"
          },
          "dynamoId": "10f8bf0a-d4c5-4e4c-b005-1aa9aba554f1",
          "version": "v3",
          "changeType": "Addition"
      }
  ],
  "December 15th, 2023": [
      {
          "changeDate": "2023-12-15",
          "attributes": {
              "path": "/certifications/{id}/access-summaries/{type}",
              "level": 1,
              "operationId": "getIdentityAccessSummaries",
              "section": "paths",
              "id": "response-optional-property-added",
              "text": "added the optional property '/items/accessProfile/entitlements/items/account/activityInsights' to the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-identity-access-summaries"
          },
          "dynamoId": "177ffb01-4d7d-4c8b-a48e-4ad29af246f2",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2023-12-15",
          "attributes": {
              "path": "/certifications/{id}/access-summaries/{type}",
              "level": 1,
              "operationId": "getIdentityAccessSummaries",
              "section": "paths",
              "id": "response-optional-property-added",
              "text": "added the optional property '/items/role/accessProfiles/items/entitlements/items/account/activityInsights' to the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-identity-access-summaries"
          },
          "dynamoId": "fec4e2fe-3e03-4001-9877-bd49a446837b",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2023-12-15",
          "attributes": {
              "path": "/certifications/{id}/access-review-items",
              "level": 1,
              "operationId": "listIdentityAccessReviewItems",
              "section": "paths",
              "id": "response-optional-property-added",
              "text": "added the optional property '/items/accessSummary/role/accessProfiles/items/entitlements/items/account/activityInsights' to the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-identity-access-review-items"
          },
          "dynamoId": "c854cf8f-8532-4145-ac17-0424f46fce66",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2023-12-15",
          "attributes": {
              "path": "/certifications/{id}/access-summaries/{type}",
              "level": 1,
              "operationId": "getIdentityAccessSummaries",
              "section": "paths",
              "id": "response-optional-property-added",
              "text": "added the optional property '/items/entitlement/account/activityInsights' to the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/get-identity-access-summaries"
          },
          "dynamoId": "70a3ad1c-8568-41ec-9c59-945b18240732",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2023-12-15",
          "attributes": {
              "path": "/certifications/{id}/access-review-items",
              "level": 1,
              "operationId": "listIdentityAccessReviewItems",
              "section": "paths",
              "id": "response-optional-property-added",
              "text": "added the optional property '/items/accessSummary/accessProfile/entitlements/items/account/activityInsights' to the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-identity-access-review-items"
          },
          "dynamoId": "c457cbcf-ccc6-4816-abe3-cb455b6f8a83",
          "version": "v3",
          "changeType": "Addition"
      },
      {
          "changeDate": "2023-12-15",
          "attributes": {
              "path": "/certifications/{id}/access-review-items",
              "level": 1,
              "operationId": "listIdentityAccessReviewItems",
              "section": "paths",
              "id": "response-optional-property-added",
              "text": "added the optional property '/items/accessSummary/entitlement/account/activityInsights' to the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.v3.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/v3/list-identity-access-review-items"
          },
          "dynamoId": "b4ebebd7-fe59-46cc-b2ca-8da82f0ce7f8",
          "version": "v3",
          "changeType": "Addition"
      }
  ],
  "December 6th, 2023": [
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/import/{id}",
              "level": 3,
              "operationId": "getSpConfigImportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'created' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-import-status"
          },
          "dynamoId": "63913509-04a9-4903-acf0-740e4418803d",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export/{id}",
              "level": 1,
              "operationId": "getSpConfigExportStatus",
              "section": "paths",
              "id": "response-body-all-of-added",
              "text": "added 'SpConfigExportJob.yaml, RevisionSchema[1]' to the response body 'allOf' list for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-export-status"
          },
          "dynamoId": "74abbc9f-eb02-47c7-89e6-b5bc975c3b17",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export",
              "level": 3,
              "operationId": "exportSpConfig",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'completed' from the response with the '202' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/export-sp-config"
          },
          "dynamoId": "a0e477e7-6de2-4427-89a1-52068fcbeb13",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/import/{id}",
              "level": 3,
              "operationId": "getSpConfigImportStatus",
              "section": "paths",
              "id": "response-body-type-changed",
              "text": "the response's body type/format changed from 'object'/'' to ''/'' for status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-import-status"
          },
          "dynamoId": "be188a71-1caa-465e-a59d-b52e7e77204f",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/import/{id}",
              "level": 3,
              "operationId": "getSpConfigImportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'description' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-import-status"
          },
          "dynamoId": "c797daa0-5cec-4339-8586-1cf9fd61119c",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export/{id}",
              "level": 3,
              "operationId": "getSpConfigExportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'completed' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-export-status"
          },
          "dynamoId": "648b975a-f411-4896-a1c2-13c33716c763",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/import/{id}",
              "level": 3,
              "operationId": "getSpConfigImportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'jobId' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-import-status"
          },
          "dynamoId": "be881742-c3f3-4e50-a5ee-01d50a891d78",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export",
              "level": 3,
              "operationId": "exportSpConfig",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'description' from the response with the '202' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/export-sp-config"
          },
          "dynamoId": "3b3b96ee-5ac7-43a9-9a7f-b8b2632d8aa9",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export",
              "level": 3,
              "operationId": "exportSpConfig",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'expiration' from the response with the '202' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/export-sp-config"
          },
          "dynamoId": "3966db83-61eb-406f-b5da-da637c032b29",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/import/{id}",
              "level": 3,
              "operationId": "getSpConfigImportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'expiration' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-import-status"
          },
          "dynamoId": "103d1c20-dafe-4666-9b6a-4179c9f98da5",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export",
              "level": 3,
              "operationId": "exportSpConfig",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'created' from the response with the '202' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/export-sp-config"
          },
          "dynamoId": "dc5984f6-f6bd-4919-a2cf-f4f133a62e9d",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/import/{id}",
              "level": 3,
              "operationId": "getSpConfigImportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'message' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-import-status"
          },
          "dynamoId": "8d32e626-2ed6-4b79-89fc-dbfdc56e9df2",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/import",
              "level": 3,
              "operationId": "importSpConfig",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'description' from the response with the '202' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/import-sp-config"
          },
          "dynamoId": "86a9b0f0-1411-4e34-92df-0c30e6bce58b",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export/{id}",
              "level": 3,
              "operationId": "getSpConfigExportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'jobId' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-export-status"
          },
          "dynamoId": "73c2bb4d-1fd2-4721-9ed8-9cfd6da568a1",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export/{id}",
              "level": 3,
              "operationId": "getSpConfigExportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'created' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-export-status"
          },
          "dynamoId": "22ce6de4-0d9b-4be0-bf52-c6cc126aa8d4",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export/{id}",
              "level": 3,
              "operationId": "getSpConfigExportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'message' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-export-status"
          },
          "dynamoId": "e99c1013-fc6d-4b59-ba60-f4bfc71b7e3d",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export/{id}",
              "level": 3,
              "operationId": "getSpConfigExportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'expiration' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-export-status"
          },
          "dynamoId": "448c3b92-9edc-4bc7-958a-0e4a0993bec4",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export/{id}",
              "level": 3,
              "operationId": "getSpConfigExportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'type' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-export-status"
          },
          "dynamoId": "900097cf-868d-4c0b-94b4-3717295c042d",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/import/{id}",
              "level": 3,
              "operationId": "getSpConfigImportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'completed' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-import-status"
          },
          "dynamoId": "a8b00497-7a7d-4554-a40f-da3815628ea3",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export",
              "level": 3,
              "operationId": "exportSpConfig",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'status' from the response with the '202' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/export-sp-config"
          },
          "dynamoId": "3e99c555-79ff-4f23-b10a-4ba236c8f741",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export/{id}",
              "level": 3,
              "operationId": "getSpConfigExportStatus",
              "section": "paths",
              "id": "response-body-type-changed",
              "text": "the response's body type/format changed from 'object'/'' to ''/'' for status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-export-status"
          },
          "dynamoId": "a73123a9-32fc-448a-9dfa-dbec4e5fc50b",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/import/{id}",
              "level": 3,
              "operationId": "getSpConfigImportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'modified' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-import-status"
          },
          "dynamoId": "e944de11-a589-4303-9dd3-5a59789c37a8",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export/{id}",
              "level": 1,
              "operationId": "getSpConfigExportStatus",
              "section": "paths",
              "id": "api-security-added",
              "text": "the endpoint scheme security 'UserContextAuth' was added to the API",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-export-status"
          },
          "dynamoId": "1e81d1c2-64ac-419b-a47f-e7ae1f3f24ea",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/import",
              "level": 3,
              "operationId": "importSpConfig",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'completed' from the response with the '202' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/import-sp-config"
          },
          "dynamoId": "69208f5a-f016-456b-b23e-6181494ad6c7",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export",
              "level": 3,
              "operationId": "exportSpConfig",
              "section": "paths",
              "id": "response-body-type-changed",
              "text": "the response's body type/format changed from 'object'/'' to ''/'' for status '202'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/export-sp-config"
          },
          "dynamoId": "a5bdb5dd-6989-4e9e-a98d-82e873109355",
          "version": "beta",
          "changeType": "Change"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export/{id}",
              "level": 3,
              "operationId": "getSpConfigExportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'description' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-export-status"
          },
          "dynamoId": "0963b417-3487-461e-9bd5-3b1bfa806442",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/import",
              "level": 3,
              "operationId": "importSpConfig",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'message' from the response with the '202' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/import-sp-config"
          },
          "dynamoId": "3f2cebac-4a56-4e46-b960-417036594bdd",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export/{id}",
              "level": 3,
              "operationId": "getSpConfigExportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'modified' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-export-status"
          },
          "dynamoId": "6d8a8695-b871-4faa-9708-25071f0eceea",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/import/{id}",
              "level": 3,
              "operationId": "getSpConfigImportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'status' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-import-status"
          },
          "dynamoId": "6659fa94-5ec6-4e35-9a67-034424660340",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export",
              "level": 3,
              "operationId": "exportSpConfig",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'modified' from the response with the '202' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/export-sp-config"
          },
          "dynamoId": "7de3b54d-f1b8-4fbc-9bb2-46ee449876fd",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/import/{id}",
              "level": 1,
              "operationId": "getSpConfigImportStatus",
              "section": "paths",
              "id": "api-security-added",
              "text": "the endpoint scheme security 'UserContextAuth' was added to the API",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-import-status"
          },
          "dynamoId": "8cffe756-3b9f-41d7-8779-a9cfacb20f63",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/import/{id}",
              "level": 1,
              "operationId": "getSpConfigImportStatus",
              "section": "paths",
              "id": "response-body-all-of-added",
              "text": "added 'SpConfigJob.yaml, RevisionSchema[1]' to the response body 'allOf' list for the response status '200'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-import-status"
          },
          "dynamoId": "ab91152b-1e76-4f66-9aa3-8b513bdec0fe",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export",
              "level": 3,
              "operationId": "exportSpConfig",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'message' from the response with the '202' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/export-sp-config"
          },
          "dynamoId": "3f69e737-b7c2-43aa-bb6d-fc05cc03dfd2",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export",
              "level": 3,
              "operationId": "exportSpConfig",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'jobId' from the response with the '202' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/export-sp-config"
          },
          "dynamoId": "3a218d29-a45f-4bea-a12d-db0a001b5cca",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export",
              "level": 1,
              "operationId": "exportSpConfig",
              "section": "paths",
              "id": "response-body-all-of-added",
              "text": "added 'SpConfigJob.yaml, RevisionSchema[1]' to the response body 'allOf' list for the response status '202'",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/export-sp-config"
          },
          "dynamoId": "b4f01ca7-5dd4-4ccd-a505-5883c8786af6",
          "version": "beta",
          "changeType": "Addition"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/import/{id}",
              "level": 3,
              "operationId": "getSpConfigImportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'type' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-import-status"
          },
          "dynamoId": "f27d4d4c-0158-45f0-b548-be0bc170c6a8",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export",
              "level": 3,
              "operationId": "exportSpConfig",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'type' from the response with the '202' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "POST",
              "url": "https://developer.sailpoint.com/idn/api/beta/export-sp-config"
          },
          "dynamoId": "946038c2-e524-42df-bbe3-d2521318a9d7",
          "version": "beta",
          "changeType": "Deletion"
      },
      {
          "changeDate": "2023-12-06",
          "attributes": {
              "path": "/sp-config/export/{id}",
              "level": 3,
              "operationId": "getSpConfigExportStatus",
              "section": "paths",
              "id": "response-required-property-removed",
              "text": "removed the required property 'status' from the response with the '200' status",
              "source": "api-specs-new/idn/sailpoint-api.beta.yaml",
              "operation": "GET",
              "url": "https://developer.sailpoint.com/idn/api/beta/get-sp-config-export-status"
          },
          "dynamoId": "034cd5b5-f6e1-49f3-8afb-95ea445a3dc1",
          "version": "beta",
          "changeType": "Deletion"
      }
  ]
};

export default function ChangeLogRecords({filterCallback}) {
  const [cardData, setCardData] = React.useState();
  const [loadingCards, setLoadingCards] = React.useState(true);

  function filterDataByCategories(
    data,
    versionFilter,
    changeTypeFilter,
    levelFilter,
    startDate,
    endDate,
  ) {
    var filteredResults = [];

    for (var date in data) {
      var changes = data[date];
      var changeDate = new Date (new Date(parseDate(date)).toDateString());
      var start = startDate ? new Date (new Date(startDate).toDateString()) : new Date('1970-01-01');
      var end = endDate ? new Date (new Date(endDate).toDateString()) : new Date();

      if (changeDate < start || changeDate > end) {
        continue;
      }

      for (var i = 0; i < changes.length; i++) {
        var change = changes[i];
        var versionMatch =
          !versionFilter ||
          versionFilter.length === 0 ||
          versionFilter.includes(change.version);
        var changeTypeMatch =
          !changeTypeFilter ||
          changeTypeFilter.length === 0 ||
          changeTypeFilter.includes(change.changeType);
        var levelMatch =
          !levelFilter ||
          levelFilter.length === 0 ||
          (change.attributes && levelFilter.includes(change.attributes.level));

        if (versionMatch && changeTypeMatch && levelMatch) {
          if (!filteredResults[date]) {
            filteredResults[date] = [];
          }
          filteredResults[date].push(change);
        }
      }
    }

    return filteredResults;
  }

  const getChanges = async () => {
    const data = await changeset;
    const resultset = [];
    let versionFilter = [];
    let changeTypeFilter = [];
    let levelFilter = [];
    let startDate = [];
    let endDate = [];

    console.log('filterCallBack: ' + filterCallback);

    if (filterCallback.length > 0) {
      for (var i = 0; i < filterCallback.length; i++) {
        var filter = filterCallback[i];
        var filterType = filter.split('-')[0];
        var filterValue = filter.split('-')[1];
        if (filterType === 'version') {
          versionFilter.push(filterValue);
        } else if (filterType === 'changeType') {
          changeTypeFilter.push(filterValue);
        } else if (filterType === 'level') {
          levelFilter.push(mapLevelToNumber(filterValue));
        } else if (filterType === 'startDate') {
          startDate = filterValue;
        } else if (filterType === 'endDate') {
          endDate = filterValue;
        }
      }
    }

    const filterData = filterDataByCategories(
      data,
      versionFilter,
      changeTypeFilter,
      levelFilter,
      startDate,
      endDate,
    );

    if (filterData) {
      if (typeof filterData === 'object' && filterData !== null) {
        for (const key in filterData) {
          resultset.push(filterData[key]);
        }
      }
      setCardData(resultset);
    } else {
      setCardData(undefined);
    }

    setLoadingCards(false);
  };

  React.useEffect(() => {
    getChanges();
    setCardData(undefined);
    setLoadingCards(true);
  }, [filterCallback]);

  if (cardData && cardData.length > 0) {
    return (
      <div>
        <div className={styles.container}>
          {cardData.map(function (a, dateindex) {
            return <ChangeLogRecord data={a}></ChangeLogRecord>;
          })}
        </div>
      </div>
    );
  } else if (loadingCards) {
    return (
      <div>
        <BounceLoader
          className={styles.spinnerCenter}
          color={'#0033a1'}
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  } else {
    return (
      <div className={styles.noFound}>
        {' '}
        No results found with the given search criteria
      </div>
    );
  }

  function parseDate(dateStr) {
    const cleanedDateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1');
    return new Date(cleanedDateStr);
  }

  function mapLevelToNumber(level) {
    switch (level) {
      case 'info':
        return 1;
      case 'warning':
        return 2;
      case 'error':
        return 3;
      default:
        return undefined;
    }
  }
}
