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
  /** MLA: author (e.g. "United States") — optional for web sources */
  author?: string;
  /** MLA: container/site name (italicized in citation) */
  container?: string;
  /** MLA: publisher (often same as container for web) */
  publisher?: string;
  /** MLA: publication or post date */
  date?: string;
  /** MLA: date accessed (e.g. "30 Jan. 2026") */
  accessedDate?: string;
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
        "Be it enacted by the House of Representatives and the United States Senate in Congress assembled, that the following are cited as the International Military Operations Oversight and Accountability Act.",
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
      body: ["(a) No federal funds may be used to extend a covered military operation in an international territory beyond the sixty (60) day period described in Section 2 unless Congress has enacted specific authorization for such extension.",
        "(b) Funds appropriated for humanitarian operations may be used for immediate response purposes but must be reported to Congress in accordance with Section 3.",
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
      dateISO: "2026-01-27",
      label: "Topic chosen",
      details: "Selected oversight of U.S. military operations in international territories as the bill focus.",
    },
    {
      dateISO: "2026-01-27",
      label: "Research completed",
      details: "Reviewed constitutional authority (Article I, Section 8), State Department resources, and existing oversight frameworks.",
    },
    {
      dateISO: "2026-01-28",
      label: "First draft completed",
      details: "Completed initial draft including definitions, authorization limits, reporting requirements, and funding provisions.",
    },
    {
      dateISO: "2026-01-29",
      label: "Revisions completed",
      details: "Incorporated feedback and finalized section numbering, effective date, and conclusion.",
    },
    {
      dateISO: "2026-01-29",
      label: "Draft published",
      details: "Initial publication of the bill text on this website.",
    },
    {
      dateISO: "2026-01-30",
      label: "Bill published",
      details: "Finalized publication of the bill text, timeline, references (MLA), and letter draft on this website.",
    },
  ],
  references: [
    {
      title: "The Constitution of the United States: A Transcription",
      author: "United States",
      container: "National Archives",
      publisher: "National Archives and Records Administration",
      url: "https://www.archives.gov/founding-docs/constitution-transcript",
      accessedDate: "30 Jan. 2026",
      note: "This legislation is grounded in Congress’s constitutional authority under Article I, Section 8 of the U.S. Constitution.",
    },
    {
      title: "Bureau of Political-Military Affairs",
      container: "U.S. Department of State",
      publisher: "U.S. Department of State",
      url: "https://www.state.gov/bureaus-offices/under-secretary-for-arms-control-and-international-security-affairs/bureau-of-political-military-affairs",
      accessedDate: "30 Jan. 2026",
      note: "The Bureau of Political-Military Affairs is the primary agency responsible for overseeing and coordinating United States military operations in international territories.",
    },
    {
      title: "American Foreign and Military Policy",
      container: "Mershon Center for International Security Studies",
      publisher: "The Ohio State University",
      url: "https://mershoncenter.osu.edu/research/american-foreign-and-military-policy",
      accessedDate: "30 Jan. 2026",
      note: "American Foreign and Military Policy is a research center at The Ohio State University that studies the relationship between the United States and its foreign policy.",
    },
    {
      title: "War Powers Resolution of 1973",
      container: "Richard Nixon Presidential Library and Museum",
      publisher: "National Archives and Records Administration",
      url: "https://nixonlibrary.gov/news/war-powers-resolution-1973",
      accessedDate: "30 Jan. 2026",
      note: "Background on the 1973 War Powers Resolution, which requires presidential consultation with Congress and reporting when U.S. forces are introduced into hostilities; supports the bill’s 60-day and reporting framework.",
    },
    {
      title: "War Powers Resolution: Expedited Procedures in the House and Senate",
      author: "Congressional Research Service",
      container: "Congress.gov",
      publisher: "Library of Congress",
      url: "https://congress.gov/crs-product/R47603",
      accessedDate: "30 Jan. 2026",
      note: "CRS report on congressional procedures under the War Powers Resolution; relevant to authorization and termination provisions in the bill.",
    },
    {
      title: "Overview of Congressional War Powers",
      container: "U.S. Constitution Annotated",
      publisher: "Legal Information Institute, Cornell Law School",
      url: "https://www.law.cornell.edu/constitution-conan/article-1/section-8/clause-1/overview-of-congressional-war-powers",
      accessedDate: "30 Jan. 2026",
      note: "Constitutional analysis of Congress’s power to declare war and authorize military force under Article I, Section 8.",
    },
    {
      title: "Defense Primer: Legal Authorities for the Use of Military Forces",
      author: "Congressional Research Service",
      container: "EveryCRSReport.com",
      publisher: "Congressional Research Service",
      url: "https://www.everycrsreport.com/reports/IF10539.html",
      accessedDate: "30 Jan. 2026",
      note: "Primer on legal authorities for use of military force, including declarations of war and statutory authorizations; supports the bill’s legal framework.",
    },
    {
      title: "50 U.S. Code Chapter 33 - War Powers Resolution",
      container: "U.S. Code",
      publisher: "Legal Information Institute, Cornell Law School",
      url: "https://www.law.cornell.edu/uscode/text/50/chapter-33",
      accessedDate: "30 Jan. 2026",
      note: "Full text of the War Powers Resolution (1973) as codified in federal law; direct statutory precedent for reporting and time limits in the bill.",
    },
  ],
  contactEmail: "your.email@example.com",
  disclaimer:
    "This site is for informational purposes only and does not constitute legal advice or an official government publication.",
};

