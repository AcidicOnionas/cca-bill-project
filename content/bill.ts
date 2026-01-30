export type BillSection = {
  id: string;
  heading: string;
  /**
   * Paragraphs of the section body (in order).
   * Keep these as plain text; the UI will format them nicely.
   * Start a line with spaces to indent it under the previous (e.g. subsections under (a)).
   */
  body: string[];
};

export type BillSponsor = {
  name: string;
  role?: "Primary Sponsor" | "Co-Sponsor" | "Author" | "Contributor";
  districtOrOrganization?: string;
};

export type BillTimelineItem = {
  dateISO: string; // e.g. "2026-01-28"
  label: string; // e.g. "Introduced"
  details?: string;
};

export type BillReference = {
  title: string;
  source?: string;
  url?: string;
  note?: string;
};

export type BillContent = {
  title: string;
  shortTitle: string;
  status: string;
  lastUpdatedISO: string;
  summaryParagraphs: string[];
  sections: BillSection[];
  sponsors: BillSponsor[];
  timeline: BillTimelineItem[];
  references: BillReference[];
  contactEmail?: string;
  disclaimer?: string;
};

/**
 * EDIT THIS FILE to update the entire website content.
 * Replace the placeholder text with your real bill.
 */
export const bill: BillContent = {
  title: "A Bill to Establish Control of Military Affairs in International Territories",
  shortTitle: "Bill Portal",
  status: "Finished",
  lastUpdatedISO: "2026-01-30",
  summaryParagraphs: [
    ""
  ],
  sections: [
    {
      id: "preamble",
      heading: "Preamble",
      body: [
        "Be it enacted by the House of Representatives and the United State Senate in Congress assembled, that the following are cited as the International Military Operations Oversight and Accountability Act.",
      ],
    },
    {
      id: "purpose",
      heading: "Purpose",
      body: [
        "The purpose of this Act is to provide statutory oversight, reporting requirements, and funding limitations for United States military operations conducted in international territories. This Act seeks to ensure that such operations are conducted in accordance with constitutional authorities, international humanitarian standards, and the oversight responsibilities of Congress, while preserving the ability of the United States to defend its interests and personnel abroad.",

      ],
    },
    {
      id: "definitions",
      heading: "Section 1. Definitions",
      body: [
        "For purposes of this Act:",
        "(a) International territory refers to any geographic area not under the sovereignty of the United States, including international waters, international airspace, and any disputed or demilitarized zone recognized by the Department of State or relevant international bodies.",
        "(b) Covered military operation refers to the deployment, stationing, or use of the United States Armed Forces in an international territory for a period exceeding thirty (30) consecutive days, or any operation reasonably anticipated to involve armed hostilities.",
        "(c) Humanitarian operation refers to a military mission conducted primarily for disaster relief, evacuation assistance, peacekeeping, anti-piracy efforts, or the protection of civilian populations, including missions conducted in coordination with allied nations or international organizations.",
      ],
    },
    {
      id: "authority-and-limitations",
      heading: "Section 2. Authorization and Limitations on Military Operations",
      body: [
        "(a) A covered military operation in an international territory may be conducted only for the following purposes:",
        "        (1) The defense of United States Armed Forces, United States citizens, or treaty allies of the United States;",
        "        (2) The conduct of a humanitarian operation; or",
        "        (3) Pursuant to specific statutory authorization enacted by Congress.",
        "(b) No covered military operation may continue beyond sixty (60) days unless Congress approves such continuation through a joint resolution or other Act expressly authorizing the operation.",
        "(c) Nothing in this Act shall be construed to limit the authority of the President to respond to a sudden or imminent attack against the United States or the United States Armed Forces.",
      ],
    },
    {
      id: "reporting-requirements",
      heading: "Section 3. Reporting and Congressional Oversight",
      body: ["(a) Not later than fourteen (14) days after the initiation of a covered military operation in an international territory, the President shall submit a written report to Congress detailing:",
        " (1) The objectives and scope of the operation;",
        " (2) The constitutional and legal basis for the operation;",
        " (3) The estimated duration of the operation;",
        " (4) The estimated cost of the operation; and",
        " (5) Measures taken to minimize civilian harm.",
        "(b) The President shall submit an updated report to Congress every ninety (90) days for the duration of the covered military operation.",
        "(c) To the extent consistent with national security, an unclassified summary of each report shall be made available to the public.", 
      ],
    },
    {
      id: "civillian-protection",
      heading: "Section 4. Civilian Protection and Compliance",
      body: ["(a) The Department of Defense shall ensure that all covered military operations are conducted in accordance with applicable international humanitarian law and United States military regulations.",
        "(b) Any confirmed incident involving civilian harm during a covered military operation shall be formally reviewed by the Department of Defense.",
        "(c) A report summarizing the findings of such review and any corrective actions taken shall be submitted to Congress not later than thirty (30) days after the incident."
      ],
    },
    {
      id: "funding",
      heading: "Section 5. Funding",
      body: ["(a) No federal funds may be used to extend a covered military operation in an international territory beyond the sixty (60) day period described in Section 3 unless Congress has enacted specific authorization for such extension.",
        "(b) Funds appropriated for humanitarian operations may be used for immediate response purposes but must be reported to Congress in accordance with Section 4.",
      ],
    },
    {
      id: "regulations",
      heading: "Section 6. Regulations",
      body: ["The Secretary of Defense, in consultation with the Secretary of State and other relevant officials, shall establish such regulations and guidelines as are necessary to carry out the provisions of this Act.",]
    },
    {
      id: "report-evaluation",
      heading: "Section 7. Reporting and Evaluation",
      body: ["(a) The Comptroller General of the United States shall periodically review compliance with this Act and evaluate the effectiveness of congressional oversight mechanisms established herein.",
        "(b) Findings from such reviews shall be submitted to Congress for consideration."
      ],
    },
    {
      id: "effective-date",
      heading: "Section 8. Effective Date",
      body: ["This Act shall take effect on the date of enactment.",]
    },
    {
      id: "severability",
      heading: "Section 9. Severability",
      body: ["If any provision of this Act, or the application of such provision to any person or circumstance, is held invalid, the remainder of this Act, or the application of the provision to other persons or circumstances, shall not be affected.",]
    },
    {
      id: "funding-appropriations",
      heading: "Section 10. Funding Appropriation",
      body: ["Congress hereby authorizes the appropriation of such sums as may be necessary to carry out the provisions of this Act.",]
    },
    {
      id: "conclusion",
      heading: "Section 11. Conclusion",
      body: ["Through the enactment of the International Military Operations Oversight and Accountability Act, Congress affirms its constitutional responsibility to oversee extended military engagements while maintaining the ability of the United States to act decisively in defense of its interests. This Act promotes transparency, accountability, civilian protection, and responsible engagement in international territories.",]
    },
  ],
  sponsors: [
    { name: "Chris [Last Name]", role: "Author", districtOrOrganization: "" },
  ],
  timeline: [
    {
      dateISO: "2026-01-28",
      label: "Draft published",
      details: "Initial publication of the bill text on this website.",
    },
    {
      dateISO: "2026-01-30",
      label: "Bill published",
      details: "Finalized publication of the bill text on this website.",
    },
  ],
  references: [
    {
      title: "US Constitution",
      source: "Source:",
      url: "https://www.archives.gov/founding-docs/constitution-transcript",
      note: "This legislation is grounded in Congress’s constitutional authority under Article I, Section 8 of the U.S. Constitution.",
    },
  ],
  contactEmail: "your.email@example.com",
  disclaimer:
    "This site is for informational purposes only and does not constitute legal advice or an official government publication.",
};

