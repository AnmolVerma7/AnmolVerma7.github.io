/**
 * Fetches the latest public activity for a GitHub user.
 * Filters events to show unique repositories and formats them for display.
 *
 * @param {string} username - The GitHub username to fetch activity for.
 * @returns {Promise<string[]>} A promise that resolves to an array of formatted activity strings.
 */
export const fetchGitHubActivity = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/events/public`);

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub activity");
    }

    const events = await response.json();

    // Filter and format events (Unique repos only)
    const seenRepos = new Set();
    const formattedEvents = [];

    for (const event of events) {
      if (formattedEvents.length >= 3) break;

      const repoName = event.repo.name.split("/")[1];

      if (seenRepos.has(repoName)) continue;

      let activityString = null;
      switch (event.type) {
        case "PushEvent":
          activityString = `→ Pushed to ${repoName}`;
          break;
        case "CreateEvent":
          activityString = `→ Created ${repoName}`;
          break;
        case "PullRequestEvent":
          activityString = `→ Opened PR in ${repoName}`;
          break;
        case "IssuesEvent":
          activityString = `→ Opened issue in ${repoName}`;
          break;
        case "WatchEvent":
          activityString = `→ Starred ${repoName}`;
          break;
        case "ForkEvent":
          activityString = `→ Forked ${repoName}`;
          break;
      }

      if (activityString) {
        formattedEvents.push(activityString);
        seenRepos.add(repoName);
      }
    }

    return formattedEvents;
  } catch (error) {
    console.error("GitHub Fetch Error:", error);
    return []; // Return empty array on error
  }
};
