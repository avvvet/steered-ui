<section class="comparison">
	<div class="inner">
		<p class="label">vs the alternatives</p>
		<div class="table-wrap">
			<table>
				<thead>
					<tr>
						<th></th>
						<th class="highlight">steered</th>
						<th>kubecost</th>
						<th>cast.ai</th>
						<th>k9s</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="feature">install</td>
						<td class="highlight">binary</td>
						<td>helm</td>
						<td>saas</td>
						<td>binary</td>
					</tr>
					<tr>
						<td class="feature">AI guidance</td>
						<td class="highlight yes">yes</td>
						<td class="no">no</td>
						<td class="partial">basic</td>
						<td class="no">no</td>
					</tr>
					<tr>
						<td class="feature">local LLM</td>
						<td class="highlight yes">yes</td>
						<td class="no">no</td>
						<td class="no">no</td>
						<td class="no">no</td>
					</tr>
					<tr>
						<td class="feature">data privacy</td>
						<td class="highlight yes">local</td>
						<td>cloud</td>
						<td>cloud</td>
						<td>local</td>
					</tr>
					<tr>
						<td class="feature">zero footprint</td>
						<td class="highlight yes">yes</td>
						<td class="no">no</td>
						<td class="no">no</td>
						<td class="yes">yes</td>
					</tr>
					<tr>
						<td class="feature">open source</td>
						<td class="highlight yes">yes</td>
						<td class="partial">partial</td>
						<td class="no">no</td>
						<td class="yes">yes</td>
					</tr>
					<tr>
						<td class="feature">cost</td>
						<td class="highlight yes">free</td>
						<td class="partial">freemium</td>
						<td class="no">paid</td>
						<td class="yes">free</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</section>

<style>
	.comparison {
		padding: 5rem 1.5rem;
		border-bottom: 1px solid var(--border);
		display: flex;
		justify-content: center;
	}

	.inner {
		width: 100%;
		max-width: 720px;
	}

	.label {
		font-family: var(--mono);
		font-size: 0.7rem;
		color: var(--hint);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 1.25rem;
	}

	.table-wrap {
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-family: var(--mono);
		font-size: 0.78rem;
	}

	th {
		text-align: left;
		padding: 0.5rem 1rem;
		color: var(--hint);
		font-weight: 400;
		border-bottom: 1px solid var(--border);
		white-space: nowrap;
	}

	th:first-child { padding-left: 0; }

	td {
		padding: 0.65rem 1rem;
		color: var(--muted);
		border-bottom: 1px solid var(--border);
		white-space: nowrap;
	}

	td:first-child { padding-left: 0; }

	.feature {
		color: var(--text);
		font-size: 0.78rem;
	}

	.highlight {
		background: var(--surface);
		color: var(--text);
		font-weight: 500;
	}

	th.highlight {
		color: var(--text);
		font-weight: 500;
	}

	.yes {
		color: var(--green);
	}

	.no {
		color: var(--hint);
	}

	.partial {
		color: var(--amber);
	}

	tbody tr:last-child td {
		border-bottom: none;
	}

	tbody tr:hover td {
		background: var(--surface);
	}

	tbody tr:hover td.highlight {
		background: #eeede9;
	}
</style>
