export default function(current, max) {
    if (current === 0) return "var(--color-success)";
    if (current < (max / 2)) return "var(--color-success)";
    if (current < max) return "var(--color-warning)";
    if (current === max) return "var(--color-danger)";
}

export const getTableColor = function(current, max) {
    if (current < max / 2) return "var(--color-danger)";
    if (current < max) return "var(--color-warning)";
    if (current === max) return "var(--color-success)";
};