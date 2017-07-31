// eslint-disable-next-line
export const ACTION_PREFIX = 'app/';
export const LAYERS = [{
  id: 0,
  name: 'Ecology',
}, {
  id: 1,
  name: 'Economics',
}, {
  id: 2,
  name: 'Community',
}, {
  id: 3,
  name: 'Ecologically Sustainable Fisheries',
  parent: 0,
}, {
  id: 4,
  name: 'Harvest',
  parent: 1,
}, {
  id: 5,
  name: 'Harvest Assets',
  parent: 1,
}, {
  id: 6,
  name: 'Risk',
  parent: 1,
}, {
  id: 7,
  name: 'Trade',
  parent: 1,
}, {
  id: 8,
  name: 'Product Form',
  parent: 1,
}, {
  id: 101,
  name: 'Managerial Returns',
  parent: 2,
}, {
  id: 9,
  name: 'Labor Returns',
  parent: 2,
}, {
  id: 10,
  name: 'Health & Sanitation',
  parent: 2,
}, {
  id: 11,
  name: 'Community Services',
  parent: 2,
}, {
  id: 12,
  name: 'Local Ownership',
  parent: 2,
}, {
  id: 13,
  name: 'Local Labor',
  parent: 2,
}, {
  id: 14,
  name: 'Career',
  parent: 2,
}, {
  id: 200,
  name: 'Percentage of Stocks Overfished',
  parent: 3,
}, {
  id: 15,
  name: 'Degree of Overfishing',
  parent: 3,
}, {
  id: 16,
  name: 'Stock Declining, Stable, or Rebuilding',
  parent: 3,
}, {
  id: 17,
  name: 'Regulatory Mortality',
  parent: 3,
}, {
  id: 18,
  name: 'Selectivity',
  parent: 3,
}, {
  id: 19,
  name: 'Illegal, Unregulated or Unreported Landings',
  parent: 3,
}, {
  id: 20,
  name: 'Status of Critical Habitat',
  parent: 3,
}, {
  id: 21,
  name: 'Proportion of Harvest with 3rd Party Certification',
  parent: 3,
}, {
  id: 22,
  name: 'Landings Level',
  parent: 4,
}, {
  id: 23,
  name: 'Excess Capacity',
  parent: 4,
}, {
  id: 24,
  name: 'Season Length',
  parent: 4,
}, {
  id: 25,
  name: 'Ex-vessel Price Compared to Historic High',
  parent: 4,
}, {
  id: 26,
  name: 'Ratio of Asset Value to Gross Earnings',
  parent: 5,
}, {
  id: 27,
  name: 'Total Revenue Compared to Historic High',
  parent: 5,
}, {
  id: 28,
  name: 'Asset Value Compared to Historic High',
  parent: 5,
}, {
  id: 29,
  name: 'Borrowing Rate Compared to Risk-free Rate',
  parent: 5,
}, {
  id: 30,
  name: 'Source of Capital ',
  parent: 5,
}, {
  id: 31,
  name: 'Functionality of Harvest Capital',
  parent: 5,
}, {
  id: 32,
  name: 'Annual Total Revenue Volatility',
  parent: 6,
}, {
  id: 33,
  name: 'Annual Landings Volatility',
  parent: 6,
}, {
  id: 34,
  name: 'Intra-annual Landings Volatility',
  parent: 6,
}, {
  id: 35,
  name: 'Annual Price Volatility',
  parent: 6,
}, {
  id: 36,
  name: 'Intra-annual Price Volatility',
  parent: 6,
}, {
  id: 37,
  name: 'Spatial Price Volatility',
  parent: 6,
}, {
  id: 38,
  name: 'Contestability & Legal Challenges',
  parent: 6,
}, {
  id: 39,
  name: 'International Trade',
  parent: 7,
}, {
  id: 40,
  name: 'Final Market Wealth',
  parent: 7,
}, {
  id: 41,
  name: 'Wholesale Price Compared to Similar Products',
  parent: 7,
}, {
  id: 42,
  name: 'Capacity of Firms to Export to the US & EU',
  parent: 7,
}, {
  id: 43,
  name: 'Final Market Use',
  parent: 8,
}, {
  id: 44,
  name: 'Ex-vessel to Wholesale Marketing Margins',
  parent: 8,
}, {
  id: 45,
  name: 'Processing Yield',
  parent: 8,
}, {
  id: 46,
  name: 'Shrink',
  parent: 8,
}, {
  id: 47,
  name: 'Capacity Utilization Rate',
  parent: 8,
}, {
  id: 48,
  name: 'Product Improvement',
  parent: 8,
}, {
  id: 49,
  name: 'Borrowing Rate Compared to Risk-free Rate',
  parent: 100,
}, {
  id: 50,
  name: 'Source of Capitial',
  parent: 100,
}, {
  id: 51,
  name: 'Age of Facilities',
  parent: 100,
}, {
  id: 52,
  name: 'Earnings Compared to Regional Average Earnings',
  parent: 101,
}, {
  id: 53,
  name: 'Fisheries Wages Compared to Non-fishery Wages',
  parent: 101,
}, {
  id: 54,
  name: 'Social Standing of Boat Owners and Permit Holders',
  parent: 101,
}, {
  id: 55,
  name: 'Earnings Compared to Regional Average Earnings',
  parent: 101,
}, {
  id: 56,
  name: 'Manager Wages Compared to Non-fishery Wages',
  parent: 101,
}, {
  id: 57,
  name: 'Social Standing of Processing Managers',
  parent: 101,
}, {
  id: 58,
  name: 'Earnings Compared to Regional Average Earnings',
  parent: 9,
}, {
  id: 59,
  name: 'Fishery Wages Compared to Non-fishery Wages',
  parent: 9,
}, {
  id: 60,
  name: 'Social Standing of Crew',
  parent: 9,
}, {
  id: 61,
  name: 'Earnings Compared to Regional Average Earnings',
  parent: 9,
}, {
  id: 62,
  name: 'Worker Wages Compared to Non-fishery Wages',
  parent: 9,
}, {
  id: 63,
  name: 'Social Standing of Processing Workers',
  parent: 9,
}, {
  id: 64,
  name: 'Harvest Safety',
  parent: 10,
}, {
  id: 65,
  name: 'Owner Access to Health Care',
  parent: 10,
}, {
  id: 66,
  name: 'Crew Access to Health Care',
  parent: 10,
}, {
  id: 67,
  name: 'Sanitation',
  parent: 10,
}, {
  id: 68,
  name: 'Processing Owners Access to Health Care',
  parent: 10,
}, {
  id: 69,
  name: 'Processing Workers Access to Health Care',
  parent: 10,
}, {
  id: 70,
  name: 'Contestability & Legal Challenges',
  parent: 11,
}, {
  id: 72,
  name: 'Owner Education Access',
  parent: 11,
}, {
  id: 73,
  name: 'Crew Education Access',
  parent: 11,
}, {
  id: 74,
  name: 'Regional Support Businesses',
  parent: 11,
}, {
  id: 75,
  name: 'Processing Owners Education Access',
  parent: 11,
}, {
  id: 76,
  name: 'Processing Workers Education Access',
  parent: 11,
}, {
  id: 77,
  name: 'Proportion of Nonresident Employment',
  parent: 12,
}, {
  id: 78,
  name: 'Nonresident Ownership of Processng Capacity',
  parent: 12,
}, {
  id: 79,
  name: 'Crew Proportion of Nonresident Employment',
  parent: 13,
}, {
  id: 80,
  name: 'Processing Workers Proportion of Nonresident Employment',
  parent: 13,
}, {
  id: 81,
  name: 'Crew Experience',
  parent: 14,
}, {
  id: 82,
  name: 'Age Stucture of Harvesters',
  parent: 14,
}, {
  id: 83,
  name: 'Processing Workers Worker Experience',
  parent: 14,
}, {
  id: 100,
  name: 'Post-Harvest Asset Performance',
  parent: 1,
}];
